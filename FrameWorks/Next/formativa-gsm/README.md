# Sistema de Gestão de Manutenção (Formativa)

## Briefing

### Visão Geral do Projeto
O projeto consiste no desenvolvimento de um Sistema de gestão de Manutenção (SGM) no
formato de uma aplicação web.

## Escopo

- ### Objetivos:

- ### Público-Alvo:
    - Técnicos de Manutenção
    - Gestores de Manutenção
    - Administradores do Sistema

- ### Recursos Tecnológicos:

## Diagramas (Mermaid, Miro, Draw.io)

1. ### Diagrama de Classes
Este Diagrama modela as principais entidades do sistema:
- Usuários (User/Usuarios);
    - atributos: id, nome, email, senha, função
    - métodos: create, read, update, delete, login, logout
- Máquinas/Equipamentos (Equipment);
    - atributos: id, modelo, marca, numSerie, status, localizacao
    - métodos: create, read, update, delete
- Ordem de Serviço(Service);
    - atributos: id, titulo, descricao, idEquipamento, idTecnico, tipoManutencao
    - métodos: create, read, update, delete

```mermaid

classDiagram

    class Usuario{
        +String id
        +String nome
        +String email
        +String senha
        +String funcao
        +login()
        +logout()
        +create()
        +read()
        +update()
        +delete()
    }

    class Equipamento{
        +String id
        +String nome
        +String modelo
        +String numeroSerie
        +String localizacao
        +String status
        +create()
        +read()
        +update()
        +delete()
    }

    class OrdemServico{
        +String id
        +string titulo
        +String descricao
        +String tipoManutencao
        +String status
        +String idTecnico
        +String IdEquipamento
        +create()
        +read()
        +update()
        +delete()
    }

    Usuario "1" -- "1+" OrdemServico : "é resposável por"
    Equipamento "1" -- "1+" OrdemServico : "associado a"

```
 #### Explicação do Diagrama de Classe
 - Um Usuário (Técnico) por ser responsável por várias Ordens de Servico
 - Um Equipamento por estar associado a várias Ordens de Serviço

 2. ### Diagrama de Caso de Uso
 Ilustrar as interações dos diferentes tipos de usuários (atores) com as funcionalidades do sistema

 #### Explicação:
 - Atores: Técnico, Gestor, Admin
 
 - Casos de Usos:
     - Técnico: Gerenciar Ordens de Servico (CRUD) e acessar o DashBoard
     - Gestor: Gerenciar Ordens de Serviço(CRUD) , Gerenciar Equipamento
     - Admin: Gerenciar Usuario, acessar o DashBoard

     Fazer o login -> Antes de Qualquer Ação

```mermaid
graph TD
    subgraph "SGM"
        uc1([Fazer Login])
        uc2([Gerenciar Ordens de Serviço - CRUD])
        uc3([Gerenciar Equipamentos - CRUD])
        uc4([Gerenciar Usuário])
        uc5([Acessar o DashBoard])
    end

    Tecnico([Técnico de Manutenção])
    Gestor([Gerente de Manutenção])
    Admin([Administrador do Sistema])

    Tecnico --> uc1 
    Tecnico --> uc3
    Tecnico --> uc5

    Gestor --> uc1
    Gestor --> uc2
    Gestor --> uc3
    Gestor --> uc5

    Admin --> uc1
    Admin --> uc4
    Admin --> uc5

    uc2 -.-> uc1
    uc3 -.-> uc1
    uc4 -.-> uc1
    uc5 -.-> uc1

```

3. ### Diagram de Fluxo (Login e Acesso ao Dashboard)
Detalhar o passo a passo que um usuário segue para se autenticar no sistema a acessar o dashboard

#### Explicação:
- O Fluxo começa quando osuário acessa a tela de login
- Insere as credenciais( email e senha)
- O sistema verifica se as credenciais são válidas
    - se sim: gera um JWT (token) => dashboard
    - se não: mensagem de erro eusuário permanece na tela de l
    login

```mermaid

graph TD
    A[Início] --> B{Acessa a Tela de Login}
    B --> C[Preencher Email e Senha]
    C --> D{Valida as Credenciais}
    D --> Sim --> E[Gera um Token JWT]
    E --> F[DashBoard]
    D --> Não --> K[Mensagem de Erro]
    K --> B

```

--- 

## Análise de Risco

### Matriz de Análise de Risco do Projeto SGM

A tabela abaixo apresenta os riscos identificados no projeto **SGM**, organizados por categoria, junto com a probabilidade, impacto e estratégias de mitigação propostas.

---

### Riscos Técnicos

| ID  | Risco                                     | Probabilidade | Impacto | Mitigação |
|-----|-------------------------------------------|---------------|---------|-----------|
| 1   | Chave secreta do JWT comprometida         | Média         | Alto    | Utilizar chaves secretas longas e complexas, armazená-las em variáveis de ambiente e implementar política de rotação de chaves. |
| 2   | Vulnerabilidade de truncamento do Bcrypt  | Baixa         | Alto    | Garantir que a entrada para o hashing de senha nunca exceda 72 bytes e tratar a senha de forma isolada, sem concatenação. |
| 3   | Lentidão do sistema com aumento de dados  | Média         | Média   | Otimizar consultas com indexação, implementar paginação e planejar arquitetura para escalabilidade futura. |
| 4   | Código de baixa qualidade com bugs        | Alta          | Média   | Adotar práticas de código limpo, revisões de código (code review) e testes unitários e de integração contínua. |

---

### Riscos de Gerenciamento

| ID  | Risco                             | Probabilidade | Impacto | Mitigação |
|-----|-----------------------------------|---------------|---------|-----------|
| 5   | Aumento do escopo (Scope Creep)   | Alta          | Média   | Formalizar processo de controle de mudanças e avaliar impacto em prazo/custo antes da aprovação. |
| 6   | Atraso na entrega do projeto      | Alta          | Média   | Utilizar metodologias ágeis, reavaliar cronograma a cada sprint e manter comunicação transparente sobre progresso. |
| 7   | Requisitos mal interpretados      | Média         | Alto    | Validar protótipos e wireframes com usuários finais e manter comunicação constante para esclarecimento. |

---

### Riscos Organizacionais

| ID  | Risco                                    | Probabilidade | Impacto | Mitigação |
|-----|------------------------------------------|---------------|---------|-----------|
| 8   | Resistência dos usuários à nova ferramenta | Média       | Alto    | Envolver usuários-chave desde o início, criar interface amigável (UI/UX) e comunicar benefícios do sistema. |
| 9   | Inserção de dados incorretos no sistema  | Média         | Alto    | Implementar validações robustas nos formulários e, se possível, importar/validar dados existentes. |
| 10  | Falta de treinamento para os usuários    | Média         | Média   | Criar manuais de usuário, realizar treinamentos práticos por perfil (técnico, gestor, administrador) e oferecer suporte. |

---

## Prototipagem

 Tela de login -> Unica

 DashBoard -> Tecnico, Gestor, Admin

 

---

## Codificação 