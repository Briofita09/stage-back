# Link Externo

POST /link/:processId

```
Params:
processId: string (required)

Body:
link: string (required),
title: string (required)

Retornos esperados:
201 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno
```

PUT /link/:linkId

```
Params:
linkId: string (required)

Body:
link: string (required),
title: string (required)

Retornos esperados:
201 -> Sucesso
404 -> Link não encontrado
500 -> Erro interno
```

GET /link/:processId

```
Params:
processId: string (required)

Retornos esperados:
201 -> Sucesso
404 -> Processo não encontrado
500 -> Erro interno
```

DELETE /link/:linkId

```
Params:
linkId: string (required)

Retornos esperados:
201 -> Sucesso
404 -> Link não encontrado
500 -> Erro interno
```
