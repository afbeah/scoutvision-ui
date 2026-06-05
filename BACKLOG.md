# 📋 ScoutVision UI Backlog

## 🎯 Sprint Atual - Frontend Foundation

Objetivo: criar a primeira versão visual consumindo a ScoutVision API.

### Alta Prioridade

- [x] Criar projeto Angular
- [x] Estruturar pastas do frontend
- [x] Criar layout base da aplicação
- [x] Criar sidebar de navegação

- [x] Criar dashboard inicial
- [x] Configurar consumo da API

---

### Média Prioridade

- [ ] Listar jogadores cadastrados
- [ ] Criar tabela de jogadores
- [ ] Criar cards de métricas
- [ ] Criar tela de detalhes do jogador

---

### Baixa Prioridade

- [ ] Tema escuro
- [ ] Responsividade mobile
- [ ] Ajustes visuais

---

## 📊 Analytics UI

- [ ] Tela de rankings
- [ ] Tela de comparação de jogadores
- [ ] Exibição do ScoutVision Score
- [ ] Relatórios visuais

---

## 🏆 Academy UI

- [ ] Dashboard Academy
- [ ] Cadastro de atletas
- [ ] Histórico de evolução
- [ ] Relatórios para pais e treinadores

---
## 🚀 Próxima Entrega

Frontend Angular com:

- Dashboard
- Integração com API
- Lista de jogadores
- Cards de métricas

---

## Débito Técnico: Investigar comportamento de Change Detection no Angular 21

### Contexto

O Dashboard realiza corretamente o consumo da API de jogadores através do HttpClient e recebe os dados do backend.

A variável `totalPlayers` é atualizada corretamente e os valores são exibidos no console, porém a interface não atualiza automaticamente após operações assíncronas.

### Testes realizados

* API funcionando corretamente.
* Endpoint `/players` retornando dados.
* Service Angular funcionando.
* Subscribe executando normalmente.
* `totalPlayers` recebendo o valor correto.
* `setTimeout()` também não atualiza a interface automaticamente.
* `ChangeDetectorRef.detectChanges()` atualiza a interface corretamente.

### Solução Temporária

Foi utilizado o `ChangeDetectorRef.detectChanges()` após a atualização dos dados para forçar a renderização da interface.

A solução está funcionando e permite a continuidade do desenvolvimento do projeto, porém a causa raiz do comportamento ainda deverá ser investigada.

### Próximos Passos

* Investigar o comportamento de Change Detection no Angular 21.
* Verificar relação com aplicações Zoneless.
* Avaliar utilização de Signals para gerenciamento de estado e atualização da interface.
* Revisar a necessidade do uso manual de `ChangeDetectorRef`.
