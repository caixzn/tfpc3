package br.com.tfpc3.api.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.tfpc3.api.domain.Marca;

public interface MarcaRepository extends CrudRepository<Marca, Long> {
    
}
