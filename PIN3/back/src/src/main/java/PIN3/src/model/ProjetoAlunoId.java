package PIN3.src.model;

import jakarta.persistence.Embeddable;

import java.util.Objects;

@Embeddable
public class ProjetoAlunoId {
    private Integer projetoId;
    private Integer alunoId;
    public ProjetoAlunoId(){

    }
    public ProjetoAlunoId(Integer alunoId, Integer projetoId) {
        this.alunoId = alunoId;
        this.projetoId =projetoId;
    }

    public Integer getProjetoId() {
        return projetoId;
    }

    public void setProjetoId(Integer projetoId) {
        this.projetoId = projetoId;
    }

    public Integer getAlunoId() {
        return alunoId;
    }

    public void setAlunoId(Integer alunoId) {
        this.alunoId = alunoId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProjetoAlunoId that = (ProjetoAlunoId) o;
        return Objects.equals(projetoId, that.projetoId) && Objects.equals(alunoId, that.alunoId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(projetoId, alunoId);
    }
}
