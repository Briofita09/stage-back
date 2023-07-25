# Processo

POST /process/

```
Body:
name: string (required)

Retornos esperados:
201 -> Sucesso
500 -> Erro interno
```

GET /process/:areaId

```
Params
areaId: string (required)

Retornos esperados:
200 -> Sucesso
404 -> Área não encontrada
500 -> Erro interno
```

GET /process/:processId

```
Params:
processId: string (required)

Retornos esperados:
200 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno
```

PUT /process/:processId

```
Params:
processId: string (required)

Body:
name: string (required)

Retornos esperados:
200 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno
```

DELETE /process/:processId

```
Params:
processId: string (required)

Retornos esperados:
200 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno
```
