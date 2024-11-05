package PIN3.src.resources;

import PIN3.src.model.Projeto;
import PIN3.src.model.ProjetoAluno;
import PIN3.src.model.Tarefa;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
@Service
public class RelatorioService {
    public void gerarRelatorioProjeto(Projeto projeto) {
        int countTarefaConcluida = 0;
        int totalTarefas = projeto.getTarefas().size();

        // Número total de tarefas concluídas
        for (Tarefa t : projeto.getTarefas()) {
            if (t.getStatusTarefa() == 1) {
                countTarefaConcluida++;
            }
        }

        // Calcule a taxa de conclusão de tarefas
        double taxaConclusao = totalTarefas > 0 ? (countTarefaConcluida / (double) totalTarefas) * 100 : 0;

        // Status atual do projeto
        int statusProjeto = projeto.getStatusProjeto();

        // Prazo restante ou atraso
        LocalDate dataFim = projeto.getDataFim().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        long diasRestantes = ChronoUnit.DAYS.between(LocalDate.now(), dataFim);

        // Progresso estimado do projeto em porcentagem
        double progressoProjeto = totalTarefas > 0 ? (countTarefaConcluida / (double) totalTarefas) * 100 : 0;

        // Nome do Coordenador
        String nomeCoordenador = projeto.getCoordenador() != null ? projeto.getCoordenador().getNome() : "Coordenador não atribuído";

        // Lista de nomes dos participantes
        List<String> nomesParticipantes = new ArrayList<>();
        for (ProjetoAluno projetoAluno : projeto.getParticipantes()) {
            if (projetoAluno.getAluno() != null) {
                nomesParticipantes.add(projetoAluno.getAluno().getNome());
            }
        }

        // Exemplo de impressão das métricas
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

                // Calcular o tempo de conclusão da tarefa
                LocalDate dataInicioTarefa = t.getDataInicio().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
                LocalDate dataEntregaTarefa = t.getDataEntrega().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
                long diasConclusao = ChronoUnit.DAYS.between(dataInicioTarefa, dataEntregaTarefa);
                tempoTotalConclusao += diasConclusao;

                // Verificar se a tarefa foi concluída dentro do prazo
                LocalDate prazoTarefa = dataInicioTarefa.plusDays(t.getPrazoEmDias());

                if (!dataEntregaTarefa.isAfter(prazoTarefa)) {
                    tarefasDentroPrazo++;
                }
            }
        }

        // Tempo médio de conclusão (Velocidade)
        double tempoMedioConclusao = countTarefaConcluida > 0 ? (double) tempoTotalConclusao / countTarefaConcluida : 0;

        // Percentual de tarefas concluídas dentro do prazo
        double percentualDentroPrazo = totalTarefas > 0 ? (tarefasDentroPrazo / (double) totalTarefas) * 100 : 0;

        // Exemplo de exibição das métricas de desempenho
        System.out.println("Desempenho da Equipe:");
        System.out.println("Tempo Médio de Conclusão das Tarefas: " + tempoMedioConclusao + " dias");
        System.out.println("Percentual de Tarefas Concluídas dentro do Prazo: " + percentualDentroPrazo + "%");
    }

}


