# Edge

POST edge/:processId

```
Params:
processId: string (required)

Body: [{
    source: string (required)
    target: string (required)
}]

Retornos esperados:
201 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno
```

DELETE edge/:processId

```
Params:
processId: string (required)

Retornos esperados:
201 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno
```

GET edge/:processId

```
Params:
processId: string (required)

Retornos esperados:
201 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno
```
