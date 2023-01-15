package br.com.tfpc3.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.tfpc3.api.domain.Marca;
import br.com.tfpc3.api.repository.MarcaRepository;

@Service
public class MarcaService {
    @Autowired
    private MarcaRepository marcaRepository;

    public Marca save(@RequestBody Marca marca) {
        return marcaRepository.save(marca);
    }

    public List<Marca> findAll() {
        return (List<Marca>) marcaRepository.findAll();
    }

    public Optional<Marca> findById(Long id) {
        return marcaRepository.findById(id);
    }

    public Marca update(Marca marca) {
        return marcaRepository.save(marca);
    }

    public void deleteById(Long id) {
        marcaRepository.deleteById(id);
    }
}
