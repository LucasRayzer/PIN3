package PIN3.src.resources;

import PIN3.src.model.*;
import PIN3.src.repository.RelAdmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
@Service
public class RelatorioService {
    @Autowired
    private RelAdmRepository relAdmRepository;


    public void gerarRelatorioProjeto(Projeto projeto, LocalDate CriaInicio, LocalDate CriaFim) {
        int countTarefaConcluida = 0;
        int totalTarefas = projeto.getTarefas().size();

        //número total de tarefas concluídas
        for (Tarefa t : projeto.getTarefas()) {
            if (t.getStatusTarefa() == 1) {
                countTarefaConcluida++;
            }
        }

        //calcule a taxa de conclusão de tarefas
        double taxaConclusao = totalTarefas > 0 ? (countTarefaConcluida / (double) totalTarefas) * 100 : 0;

        //status atual do projeto
        int statusProjeto = projeto.getStatusProjeto();

        //prazo restante ou atraso
        LocalDate dataFim = projeto.getDataFim();
        LocalDate dataIncio = projeto.getDataInicio();
        long diasRestantes = ChronoUnit.DAYS.between(LocalDate.now(), dataFim);

        //progresso estimado do projeto
        double progressoProjeto = totalTarefas > 0 ? (countTarefaConcluida / (double) totalTarefas) * 100 : 0;

        //nome do Coordenador
        String nomeCoordenador = projeto.getCoordenador() != null ? projeto.getCoordenador().getNome() : "Coordenador não atribuído";

        //nomes dos participantes
        List<String> nomesParticipantes = new ArrayList<>();
        for (ProjetoAluno projetoAluno : projeto.getParticipantes()) {
            if (projetoAluno.getAluno() != null) {
                nomesParticipantes.add(projetoAluno.getAluno().getNome());
            }
        }


        System.out.println("Relatório do Projeto: " + projeto.getNomeProjeto());
        System.out.println("Coordenador: " + nomeCoordenador);
        System.out.println("Participantes: " + nomesParticipantes);
        System.out.println("Total de Tarefas: " + totalTarefas);
        System.out.println("Tarefas Concluídas: " + countTarefaConcluida);
        System.out.println("Taxa de Conclusão: " + taxaConclusao + "%");
        System.out.println("Status do Projeto: " + statusProjeto);
        System.out.println("Dias Restantes para Conclusão: " + (diasRestantes >= 0 ? diasRestantes : "Atrasado em " + Math.abs(diasRestantes) + " dias"));
        System.out.println("Progresso Estimado do Projeto: " + progressoProjeto + "%");

        long tempoTotalConclusao = 0;
        int tarefasDentroPrazo = 0;


        for (Tarefa t : projeto.getTarefas()) {
            if (t.getStatusTarefa() == 1) {
                countTarefaConcluida++;

                //tempo de conclusão da tarefa
                LocalDate dataInicioTarefa = t.getDataInicio();
                LocalDate dataEntregaTarefa = t.getDataEntrega();
                long diasConclusao = ChronoUnit.DAYS.between(dataInicioTarefa, dataEntregaTarefa);
                tempoTotalConclusao += diasConclusao;

                //tarefa foi concluída dentro do prazo
                LocalDate prazoTarefa = dataInicioTarefa.plusDays(t.getPrazoEmDias());

                if (!dataEntregaTarefa.isAfter(prazoTarefa)) {
                    tarefasDentroPrazo++;
                }
            }
        }

        // Tempo médio de conclusão
        double tempoMedioConclusao = countTarefaConcluida > 0 ? (double) tempoTotalConclusao / countTarefaConcluida : 0;

        //Percentual de tarefas concluídas dentro do prazo
        double percentualDentroPrazo = totalTarefas > 0 ? (tarefasDentroPrazo / (double) totalTarefas) * 100 : 0;

        RelatorioAdmin relatorioAdmin = new RelatorioAdmin();
        relatorioAdmin.setCountTarefaConcluida(countTarefaConcluida);
        relatorioAdmin.setNomeProjeto(projeto.getNomeProjeto());
        relatorioAdmin.setDiasRestantes(diasRestantes);
        relatorioAdmin.setParticipantes(nomesParticipantes);
        relatorioAdmin.setProgressoProjeto(progressoProjeto);
        relatorioAdmin.setStatusProjeto(statusProjeto);
        relatorioAdmin.setTaxaConclusao(taxaConclusao);
        relatorioAdmin.setTempoMedioConclusao(tempoMedioConclusao);
        relatorioAdmin.setTotalTarefas(totalTarefas);
        relatorioAdmin.setNomeCoordenador(nomeCoordenador);
        relatorioAdmin.setProjeto(projeto);
        relatorioAdmin.setDataFim(dataFim);
        relatorioAdmin.setDataInicio(dataIncio);
        relatorioAdmin.setCriaInicio(CriaInicio);
        relatorioAdmin.setCriaFim(CriaFim);

        relAdmRepository.save(relatorioAdmin);

        System.out.println("Desempenho da Equipe:");
        System.out.println("Tempo Médio de Conclusão das Tarefas: " + tempoMedioConclusao + " dias");
        System.out.println("Percentual de Tarefas Concluídas dentro do Prazo: " + percentualDentroPrazo + "%");
    }

}


