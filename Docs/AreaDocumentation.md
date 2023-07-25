# Área

POST /area/

```
Body:
name: string (required)

Retornos esperados:

201 -> Sucesso
409 -> Conflito
500 -> Erro interno
```

GET /area/

```
Retornos esperados:

200 -> Sucesso
500 -> Erro interno
```

GET /area/:id

```
Params:

id: string (required)

Retornos esperados:

200 -> Sucesso
404 -> Área não encontrada
500 -> Erro interno
```

PUT /area/:id

```
Params:

id: string (required)

Body:
name: string (required)

Retornos esperados:

200 -> Sucesso
404 -> Área não encontrada
409 -> Conflito
500 -> Erro interno
```

DELETE /area/:id

```
Params:

id: string (required)

Retornos esperados:

204 -> Sucesso
404 -> Área não encontrada
500 -> Erro interno
```
