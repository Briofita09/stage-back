# Sub Processos

POST /subprocess/:processId

```
Params:
processId: string (required)

Body: [
    {
        name: string (required),
        xCoord: number (required),
        yCoord: number (required)
    }
]

Retornos esperados:
201 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno

```

PUT /subprocess/:processId

```
Params:
processId: string (required)

Body: [
    {
        name: string (required),
        xCoord: number (required),
        yCoord: number (required)
    }
]

Retornos esperados:
201 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno

```

GET /subprocess/:processId

```
Params:
processId: string (required)

Retornos esperados:
201 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno

```
