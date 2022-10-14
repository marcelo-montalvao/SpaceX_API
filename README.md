# SpaceX_API

Leitura dos lançamentos realizados pela SpaceX.

## Ler todos os lançamentos anteriores

**Method** : `GET`
**URL** : `http://localhost:3000/api/launches/PreviousList`

## Ler o último lançamento

**Method** : `GET`
**URL** : `http://localhost:3000/api/launches/PreviousOne`

## Ler todos os próximos lançamentos

**Method** : `GET`
**URL** : `http://localhost:3000/api/launches/NextList`

## Ler o próximo lançamento

**Method** : `GET`
**URL** : `http://localhost:3000/api/launches/NextOne`

# Implementação

Foi utilizado o express, seguindo uma organização arquitetural separada por responsabilidade, onde foi utilizado o diretório Routes que contém as rotas para a API e o diretório 'Services' onde contém a lógica de comunicação com o serviço externo, não foi utilizado o diretório models, já que o retorno do serviço externo já possui os dados em formato necessário.
