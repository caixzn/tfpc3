package br.com.tfpc3.api.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.tfpc3.api.domain.Veiculo;

public interface VeiculoRepository extends CrudRepository<Veiculo, Long> {
    
}
