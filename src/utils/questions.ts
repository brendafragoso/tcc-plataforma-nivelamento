export type QuestionCategory =
  | "Matemática Básica"
  | "Álgebra"
  | "Interpretação de Texto";

export interface Question {
  id: string;
  category: QuestionCategory;
  statement: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const unitToCategory: Record<number, QuestionCategory> = {
  1: "Matemática Básica",
  2: "Álgebra",
  3: "Interpretação de Texto",
};

export const questionBank: Question[] = [
  {
    id: "mat-001",
    category: "Matemática Básica",
    statement: "Quanto é 12 × 8?",
    options: ["86", "96", "98", "108"],
    correctIndex: 1,
    explanation: "12 × 8 = 96. Pode-se decompor como 10×8 + 2×8 = 80 + 16 = 96.",
  },
  {
    id: "mat-002",
    category: "Matemática Básica",
    statement: "Quanto é 25% de 240?",
    options: ["48", "60", "72", "80"],
    correctIndex: 1,
    explanation: "25% equivale a 1/4. Logo, 240 ÷ 4 = 60.",
  },
  {
    id: "mat-003",
    category: "Matemática Básica",
    statement: "Qual o resultado de 7² − 3²?",
    options: ["16", "40", "46", "58"],
    correctIndex: 1,
    explanation: "7² = 49 e 3² = 9. Portanto, 49 − 9 = 40.",
  },
  {
    id: "mat-004",
    category: "Matemática Básica",
    statement: "Qual a fração equivalente a 0,75?",
    options: ["1/2", "2/3", "3/4", "4/5"],
    correctIndex: 2,
    explanation: "0,75 = 75/100 = 3/4 (após simplificação).",
  },
  {
    id: "mat-005",
    category: "Matemática Básica",
    statement: "Qual o valor de 2/3 + 1/6?",
    options: ["1/2", "5/6", "3/9", "4/6"],
    correctIndex: 1,
    explanation: "MMC(3,6) = 6: 4/6 + 1/6 = 5/6.",
  },
  {
    id: "mat-006",
    category: "Matemática Básica",
    statement: "Em uma loja, um produto de R$ 80 está com 15% de desconto. Qual o preço final?",
    options: ["R$ 65,00", "R$ 68,00", "R$ 70,00", "R$ 72,00"],
    correctIndex: 1,
    explanation: "15% de 80 = 12. Logo, 80 − 12 = 68.",
  },
  {
    id: "mat-007",
    category: "Matemática Básica",
    statement: "Se 3 maçãs custam R$ 6, quanto custam 8 maçãs (mesmo preço unitário)?",
    options: ["R$ 14", "R$ 15", "R$ 16", "R$ 18"],
    correctIndex: 2,
    explanation: "Preço unitário = 6 ÷ 3 = R$ 2. Logo, 8 × 2 = R$ 16.",
  },
  {
    id: "mat-008",
    category: "Matemática Básica",
    statement: "Qual o valor de √81 + √16?",
    options: ["12", "13", "14", "17"],
    correctIndex: 1,
    explanation: "√81 = 9 e √16 = 4. Portanto, 9 + 4 = 13.",
  },
  {
    id: "mat-009",
    category: "Matemática Básica",
    statement: "Qual a média aritmética dos números 4, 7, 10 e 15?",
    options: ["8", "9", "10", "12"],
    correctIndex: 1,
    explanation: "(4 + 7 + 10 + 15) ÷ 4 = 36 ÷ 4 = 9.",
  },
  {
    id: "mat-010",
    category: "Matemática Básica",
    statement: "Quanto é 2³ × 5?",
    options: ["20", "30", "40", "50"],
    correctIndex: 2,
    explanation: "2³ = 8. Logo, 8 × 5 = 40.",
  },
  {
    id: "mat-011",
    category: "Matemática Básica",
    statement: "A razão entre 18 e 24, simplificada, é:",
    options: ["2/3", "3/4", "4/5", "5/6"],
    correctIndex: 1,
    explanation: "18/24 = (18÷6) / (24÷6) = 3/4.",
  },
  {
    id: "mat-012",
    category: "Matemática Básica",
    statement: "Qual o resultado de 15 ÷ 0,5?",
    options: ["7,5", "15", "30", "45"],
    correctIndex: 2,
    explanation: "Dividir por 0,5 equivale a multiplicar por 2: 15 × 2 = 30.",
  },
  {
    id: "mat-013",
    category: "Matemática Básica",
    statement: "Qual o MMC entre 6 e 8?",
    options: ["12", "18", "24", "48"],
    correctIndex: 2,
    explanation: "Múltiplos comuns: 24, 48, 72... O menor é 24.",
  },
  {
    id: "mat-014",
    category: "Matemática Básica",
    statement: "Quanto é 1/2 + 1/3?",
    options: ["2/5", "5/6", "1/5", "2/6"],
    correctIndex: 1,
    explanation: "MMC(2,3)=6: 3/6 + 2/6 = 5/6.",
  },
  {
    id: "mat-015",
    category: "Matemática Básica",
    statement: "Quanto é 3/4 de 200?",
    options: ["120", "140", "150", "160"],
    correctIndex: 2,
    explanation: "200 ÷ 4 = 50; 50 × 3 = 150.",
  },
  {
    id: "mat-016",
    category: "Matemática Básica",
    statement: "Em 5 horas um carro percorre 400 km a velocidade constante. Quantos km percorre em 8 horas?",
    options: ["560 km", "600 km", "640 km", "720 km"],
    correctIndex: 2,
    explanation: "Velocidade = 400/5 = 80 km/h. 80 × 8 = 640 km.",
  },
  {
    id: "mat-017",
    category: "Matemática Básica",
    statement: "Qual o resultado de (−4) × (−3)?",
    options: ["−12", "−7", "7", "12"],
    correctIndex: 3,
    explanation: "Produto de dois negativos é positivo: 4 × 3 = 12.",
  },
  {
    id: "mat-018",
    category: "Matemática Básica",
    statement: "Quanto é 10% de 10% de 1.000?",
    options: ["1", "10", "100", "1.000"],
    correctIndex: 1,
    explanation: "10% de 1.000 = 100. 10% de 100 = 10.",
  },
  {
    id: "mat-019",
    category: "Matemática Básica",
    statement: "Qual o número decimal correspondente a 7/20?",
    options: ["0,25", "0,35", "0,40", "0,70"],
    correctIndex: 1,
    explanation: "7 ÷ 20 = 0,35. (Equivale a 35/100.)",
  },
  {
    id: "mat-020",
    category: "Matemática Básica",
    statement: "Em uma turma de 30 alunos, 40% são meninas. Quantas meninas há?",
    options: ["8", "10", "12", "15"],
    correctIndex: 2,
    explanation: "40% de 30 = (40 × 30) ÷ 100 = 12.",
  },
  {
    id: "mat-021",
    category: "Matemática Básica",
    statement: "Qual é o resultado de 6! ÷ 5!?",
    options: ["1", "5", "6", "30"],
    correctIndex: 2,
    explanation: "6! = 6 × 5!, então 6!/5! = 6.",
  },
  {
    id: "mat-022",
    category: "Matemática Básica",
    statement: "Um litro de tinta cobre 10 m². Quantos litros são necessários para pintar 65 m²?",
    options: ["5,5 L", "6 L", "6,5 L", "7 L"],
    correctIndex: 2,
    explanation: "65 ÷ 10 = 6,5 L.",
  },
  {
    id: "mat-023",
    category: "Matemática Básica",
    statement: "Quanto é 2/5 + 3/10?",
    options: ["1/2", "5/15", "7/10", "5/10"],
    correctIndex: 2,
    explanation: "MMC(5,10)=10: 4/10 + 3/10 = 7/10.",
  },
  {
    id: "mat-024",
    category: "Matemática Básica",
    statement: "Um produto custa R$ 200 e sofre dois descontos sucessivos de 10%. Qual o preço final?",
    options: ["R$ 160,00", "R$ 162,00", "R$ 180,00", "R$ 162,50"],
    correctIndex: 1,
    explanation: "1º desconto: 200 − 20 = 180. 2º desconto: 180 − 18 = 162.",
  },
  {
    id: "mat-025",
    category: "Matemática Básica",
    statement: "Qual a expressão equivalente a 0,2?",
    options: ["1/5", "2/5", "1/2", "2/10 e 1/5"],
    correctIndex: 3,
    explanation: "0,2 = 2/10 = 1/5. Ambas as formas estão corretas.",
  },

  {
    id: "alg-001",
    category: "Álgebra",
    statement: "Se 2x + 6 = 20, qual o valor de x?",
    options: ["5", "6", "7", "8"],
    correctIndex: 2,
    explanation: "2x = 20 − 6 = 14, portanto x = 7.",
  },
  {
    id: "alg-002",
    category: "Álgebra",
    statement: "Qual a solução da equação x² − 9 = 0?",
    options: ["x = 3", "x = −3", "x = ±3", "x = 9"],
    correctIndex: 2,
    explanation: "x² = 9 ⇒ x = ±√9 = ±3.",
  },
  {
    id: "alg-003",
    category: "Álgebra",
    statement: "Simplifique a expressão: 3(a + 2) − 2a.",
    options: ["a + 6", "5a + 6", "a + 2", "3a + 2"],
    correctIndex: 0,
    explanation: "Aplicando a distributiva: 3a + 6 − 2a = a + 6.",
  },
  {
    id: "alg-004",
    category: "Álgebra",
    statement: "Em uma função linear f(x) = 2x − 1, qual o valor de f(5)?",
    options: ["7", "9", "10", "11"],
    correctIndex: 1,
    explanation: "f(5) = 2 × 5 − 1 = 10 − 1 = 9.",
  },
  {
    id: "alg-005",
    category: "Álgebra",
    statement: "Qual a solução do sistema { x + y = 10 ; x − y = 4 }?",
    options: ["x = 7, y = 3", "x = 6, y = 4", "x = 8, y = 2", "x = 5, y = 5"],
    correctIndex: 0,
    explanation: "Somando as equações: 2x = 14 ⇒ x = 7; logo y = 10 − 7 = 3.",
  },
  {
    id: "alg-006",
    category: "Álgebra",
    statement: "O coeficiente angular da reta y = 4x − 5 é:",
    options: ["−5", "−4", "4", "5"],
    correctIndex: 2,
    explanation: "Na forma y = ax + b, o coeficiente angular é a = 4.",
  },
  {
    id: "alg-007",
    category: "Álgebra",
    statement: "Qual o valor de x na equação 5(x − 2) = 3x + 4?",
    options: ["3", "5", "7", "9"],
    correctIndex: 2,
    explanation: "5x − 10 = 3x + 4 ⇒ 2x = 14 ⇒ x = 7.",
  },
  {
    id: "alg-008",
    category: "Álgebra",
    statement: "Qual o produto (x + 2)(x − 3)?",
    options: ["x² − x − 6", "x² + x − 6", "x² − 6", "x² + 6"],
    correctIndex: 0,
    explanation: "Aplicando a distributiva: x² − 3x + 2x − 6 = x² − x − 6.",
  },
  {
    id: "alg-009",
    category: "Álgebra",
    statement: "Para a função quadrática f(x) = x² − 4x + 3, quais as raízes?",
    options: ["x = 1 e x = 3", "x = −1 e x = 3", "x = 0 e x = 4", "x = 2 e x = 3"],
    correctIndex: 0,
    explanation: "x² − 4x + 3 = (x − 1)(x − 3) = 0, logo x = 1 ou x = 3.",
  },
  {
    id: "alg-010",
    category: "Álgebra",
    statement: "Se f(x) = 3x + 2 e g(x) = x − 1, quanto vale f(g(4))?",
    options: ["8", "9", "10", "11"],
    correctIndex: 3,
    explanation: "g(4) = 3; f(3) = 3 × 3 + 2 = 11.",
  },
  {
    id: "alg-011",
    category: "Álgebra",
    statement: "Qual o valor de x na inequação 2x + 1 > 9?",
    options: ["x > 4", "x ≥ 4", "x > 5", "x < 4"],
    correctIndex: 0,
    explanation: "2x > 8 ⇒ x > 4.",
  },
  {
    id: "alg-012",
    category: "Álgebra",
    statement: "Fatorando x² − 16, obtemos:",
    options: ["(x − 4)²", "(x + 4)²", "(x − 4)(x + 4)", "(x − 8)(x + 2)"],
    correctIndex: 2,
    explanation: "Diferença de quadrados: a² − b² = (a − b)(a + b).",
  },
  {
    id: "alg-013",
    category: "Álgebra",
    statement: "Resolvendo 3x − 4 = 2x + 5, qual o valor de x?",
    options: ["1", "5", "9", "11"],
    correctIndex: 2,
    explanation: "3x − 2x = 5 + 4 ⇒ x = 9.",
  },
  {
    id: "alg-014",
    category: "Álgebra",
    statement: "Qual a forma fatorada de x² + 6x + 9?",
    options: ["(x + 3)²", "(x − 3)²", "(x + 3)(x − 3)", "x(x + 6) + 9"],
    correctIndex: 0,
    explanation: "Trinômio quadrado perfeito: a² + 2ab + b² = (a + b)².",
  },
  {
    id: "alg-015",
    category: "Álgebra",
    statement: "O domínio da função f(x) = 1/(x − 2) é:",
    options: [
      "Todos os reais",
      "Reais com x ≠ 2",
      "Reais positivos",
      "Reais com x ≠ 0",
    ],
    correctIndex: 1,
    explanation: "Denominador deve ser diferente de zero, logo x ≠ 2.",
  },
  {
    id: "alg-016",
    category: "Álgebra",
    statement: "Se f(x) = x² + 1, qual o valor de f(−2)?",
    options: ["−3", "3", "5", "−5"],
    correctIndex: 2,
    explanation: "f(−2) = (−2)² + 1 = 4 + 1 = 5.",
  },
  {
    id: "alg-017",
    category: "Álgebra",
    statement: "Em uma PA com primeiro termo 3 e razão 4, qual é o 5º termo?",
    options: ["15", "17", "19", "23"],
    correctIndex: 2,
    explanation: "aₙ = a₁ + (n−1)·r ⇒ a₅ = 3 + 4×4 = 19.",
  },
  {
    id: "alg-018",
    category: "Álgebra",
    statement: "Qual o valor de log₂ 8?",
    options: ["2", "3", "4", "8"],
    correctIndex: 1,
    explanation: "2³ = 8, portanto log₂ 8 = 3.",
  },
  {
    id: "alg-019",
    category: "Álgebra",
    statement: "Resolva: 2(x + 3) = x + 11.",
    options: ["x = 3", "x = 4", "x = 5", "x = 8"],
    correctIndex: 2,
    explanation: "2x + 6 = x + 11 ⇒ x = 5.",
  },
  {
    id: "alg-020",
    category: "Álgebra",
    statement: "Para que f(x) = ax + b passe pelos pontos (0,2) e (1,5), os valores de a e b são:",
    options: ["a = 3, b = 2", "a = 2, b = 3", "a = 5, b = 0", "a = 1, b = 4"],
    correctIndex: 0,
    explanation: "f(0)=b=2; f(1)=a+b=5 ⇒ a=3.",
  },
  {
    id: "alg-021",
    category: "Álgebra",
    statement: "Se 2^x = 32, então x vale:",
    options: ["3", "4", "5", "6"],
    correctIndex: 2,
    explanation: "32 = 2⁵, portanto x = 5.",
  },
  {
    id: "alg-022",
    category: "Álgebra",
    statement: "A soma das raízes da equação x² − 7x + 12 = 0 é:",
    options: ["3", "4", "7", "12"],
    correctIndex: 2,
    explanation: "Pela soma de Girard: x₁+x₂ = −b/a = 7/1 = 7. (Raízes: 3 e 4.)",
  },
  {
    id: "alg-023",
    category: "Álgebra",
    statement: "Qual o produto das raízes de x² − 5x + 6 = 0?",
    options: ["−6", "−5", "5", "6"],
    correctIndex: 3,
    explanation: "Produto de Girard: x₁·x₂ = c/a = 6/1 = 6.",
  },
  {
    id: "alg-024",
    category: "Álgebra",
    statement: "Resolva a inequação 3x − 5 ≤ x + 1.",
    options: ["x ≤ 3", "x ≤ 2", "x ≥ 2", "x ≥ 3"],
    correctIndex: 0,
    explanation: "2x ≤ 6 ⇒ x ≤ 3.",
  },
  {
    id: "alg-025",
    category: "Álgebra",
    statement: "A função f(x) = −x² + 4x − 3 tem concavidade voltada para:",
    options: [
      "Cima, com mínimo em x = 2",
      "Baixo, com máximo em x = 2",
      "Cima, com mínimo em x = −2",
      "Baixo, com máximo em x = 3",
    ],
    correctIndex: 1,
    explanation: "a = −1 (negativo) ⇒ concavidade para baixo; vértice em x = −b/(2a) = −4/(−2) = 2.",
  },

  {
    id: "int-001",
    category: "Interpretação de Texto",
    statement:
      "Em \"Embora chovesse muito, ele saiu sem guarda-chuva\", a conjunção \"embora\" indica:",
    options: ["Causa", "Concessão", "Consequência", "Tempo"],
    correctIndex: 1,
    explanation:
      "\"Embora\" introduz oração concessiva, admitindo um fato contrário à ação principal.",
  },
  {
    id: "int-002",
    category: "Interpretação de Texto",
    statement:
      "Em \"O aluno estudou bastante; portanto, foi aprovado\", a palavra \"portanto\" expressa:",
    options: ["Adição", "Oposição", "Conclusão", "Alternância"],
    correctIndex: 2,
    explanation:
      "\"Portanto\" é conjunção conclusiva: apresenta uma consequência lógica da causa anterior.",
  },
  {
    id: "int-003",
    category: "Interpretação de Texto",
    statement: "Qual palavra é sinônimo de \"efêmero\"?",
    options: ["Duradouro", "Passageiro", "Constante", "Vigoroso"],
    correctIndex: 1,
    explanation:
      "Efêmero significa de curta duração, transitório — portanto, sinônimo de passageiro.",
  },
  {
    id: "int-004",
    category: "Interpretação de Texto",
    statement:
      "Em \"O aluno fez a prova com entusiasmo\", o termo \"com entusiasmo\" exerce função de:",
    options: [
      "Sujeito",
      "Objeto direto",
      "Adjunto adverbial de modo",
      "Predicativo do sujeito",
    ],
    correctIndex: 2,
    explanation:
      "Indica o modo como a ação foi realizada, caracterizando adjunto adverbial de modo.",
  },
  {
    id: "int-005",
    category: "Interpretação de Texto",
    statement: "Qual é o antônimo de \"prudente\"?",
    options: ["Cauteloso", "Imprudente", "Sereno", "Sensato"],
    correctIndex: 1,
    explanation:
      "\"Prudente\" significa cauteloso; seu antônimo direto é \"imprudente\".",
  },
  {
    id: "int-006",
    category: "Interpretação de Texto",
    statement:
      "Em \"O céu, que estava limpo, escureceu de repente\", a oração destacada classifica-se como:",
    options: [
      "Subordinada adverbial causal",
      "Subordinada adjetiva explicativa",
      "Subordinada substantiva objetiva direta",
      "Coordenada sindética aditiva",
    ],
    correctIndex: 1,
    explanation:
      "A oração entre vírgulas explica uma característica do antecedente \"céu\", caracterizando uma adjetiva explicativa.",
  },
  {
    id: "int-007",
    category: "Interpretação de Texto",
    statement:
      "Na frase \"Maria é tão inteligente quanto Joana\", a relação expressa é de:",
    options: ["Comparação", "Conformidade", "Finalidade", "Proporção"],
    correctIndex: 0,
    explanation:
      "A locução \"tão... quanto\" estabelece uma comparação de igualdade.",
  },
  {
    id: "int-008",
    category: "Interpretação de Texto",
    statement:
      "Em \"Ele chegou cedo para que pudesse estudar\", a oração em destaque indica:",
    options: ["Causa", "Tempo", "Finalidade", "Concessão"],
    correctIndex: 2,
    explanation:
      "\"Para que\" introduz oração subordinada adverbial final (finalidade).",
  },
  {
    id: "int-009",
    category: "Interpretação de Texto",
    statement: "A palavra \"benevolente\" significa:",
    options: ["Cruel", "Bondoso", "Indiferente", "Inseguro"],
    correctIndex: 1,
    explanation:
      "Benevolente = que tem boa vontade, bondoso, generoso.",
  },
  {
    id: "int-010",
    category: "Interpretação de Texto",
    statement:
      "Em \"O tempo voa quando estamos felizes\", há a figura de linguagem chamada:",
    options: ["Metáfora", "Hipérbole", "Personificação (prosopopeia)", "Antítese"],
    correctIndex: 2,
    explanation:
      "Atribui-se ação humana (\"voar\") a um ente abstrato (\"tempo\"), o que caracteriza prosopopeia.",
  },
  {
    id: "int-011",
    category: "Interpretação de Texto",
    statement:
      "Em \"Comprei pão, leite e ovos\", a relação entre os termos é de:",
    options: ["Adição", "Oposição", "Alternância", "Causa"],
    correctIndex: 0,
    explanation:
      "A vírgula e o conectivo \"e\" estabelecem enumeração com sentido aditivo.",
  },
  {
    id: "int-012",
    category: "Interpretação de Texto",
    statement: "Qual o plural de \"cidadão\"?",
    options: ["Cidadãos", "Cidadões", "Cidadães", "Cidadões e cidadãos"],
    correctIndex: 0,
    explanation: "O plural correto e padronizado é \"cidadãos\".",
  },
  {
    id: "int-013",
    category: "Interpretação de Texto",
    statement:
      "Em \"Os livros que comprei são novos\", a oração destacada é classificada como:",
    options: [
      "Subordinada substantiva subjetiva",
      "Subordinada adjetiva restritiva",
      "Subordinada adjetiva explicativa",
      "Coordenada sindética conclusiva",
    ],
    correctIndex: 1,
    explanation:
      "A oração restringe (especifica) os livros aos que foram comprados, sem vírgula — caracterizando uma adjetiva restritiva.",
  },
  {
    id: "int-014",
    category: "Interpretação de Texto",
    statement: "Em \"Faça-se justiça\", o pronome \"se\" funciona como:",
    options: [
      "Pronome reflexivo",
      "Índice de indeterminação do sujeito",
      "Pronome apassivador",
      "Conjunção condicional",
    ],
    correctIndex: 2,
    explanation:
      "Com verbo transitivo direto (\"fazer\") + sujeito determinado, \"se\" é pronome apassivador (= \"justiça seja feita\").",
  },
  {
    id: "int-015",
    category: "Interpretação de Texto",
    statement:
      "Identifique a figura de linguagem em \"Chorou rios de lágrimas\".",
    options: ["Metáfora", "Hipérbole", "Eufemismo", "Sinédoque"],
    correctIndex: 1,
    explanation:
      "Há um exagero intencional para enfatizar a intensidade do choro: hipérbole.",
  },
  {
    id: "int-016",
    category: "Interpretação de Texto",
    statement: "Qual é o sinônimo da palavra \"perspicaz\"?",
    options: ["Lento", "Astuto", "Distraído", "Honesto"],
    correctIndex: 1,
    explanation:
      "Perspicaz refere-se a alguém arguto, sagaz — sinônimo de astuto.",
  },
  {
    id: "int-017",
    category: "Interpretação de Texto",
    statement:
      "Em \"Foram entregues as encomendas\", a concordância do verbo é:",
    options: [
      "Incorreta — deveria ser \"foi entregue\"",
      "Correta — concorda com \"as encomendas\" (sujeito)",
      "Indiferente",
      "Correta apenas na linguagem coloquial",
    ],
    correctIndex: 1,
    explanation:
      "Na voz passiva analítica, o verbo concorda com o sujeito (\"as encomendas\"): plural.",
  },
  {
    id: "int-018",
    category: "Interpretação de Texto",
    statement:
      "Em \"Ele disse que viria amanhã\", a oração destacada é:",
    options: [
      "Subordinada substantiva objetiva direta",
      "Subordinada adjetiva",
      "Coordenada aditiva",
      "Subordinada adverbial temporal",
    ],
    correctIndex: 0,
    explanation:
      "A oração funciona como objeto direto do verbo \"disse\" (quem diz, diz algo).",
  },
  {
    id: "int-019",
    category: "Interpretação de Texto",
    statement: "Qual é o antônimo de \"benevolência\"?",
    options: ["Caridade", "Bondade", "Crueldade", "Justiça"],
    correctIndex: 2,
    explanation:
      "Benevolência = boa vontade, bondade. Seu oposto é crueldade.",
  },
  {
    id: "int-020",
    category: "Interpretação de Texto",
    statement:
      "Em \"Estudou tanto que passou em todas as provas\", a oração em destaque indica:",
    options: ["Causa", "Consequência", "Comparação", "Concessão"],
    correctIndex: 1,
    explanation:
      "\"Tanto que\" introduz oração subordinada adverbial consecutiva.",
  },
  {
    id: "int-021",
    category: "Interpretação de Texto",
    statement:
      "Identifique a figura de linguagem em \"Seus olhos são duas estrelas\".",
    options: ["Comparação", "Metáfora", "Personificação", "Antítese"],
    correctIndex: 1,
    explanation:
      "Comparação implícita, sem conectivo (\"como\", \"feito\"): metáfora.",
  },
  {
    id: "int-022",
    category: "Interpretação de Texto",
    statement: "Assinale a frase escrita corretamente:",
    options: [
      "Houveram muitos problemas na reunião",
      "Houve muitos problemas na reunião",
      "Houveram muito problema na reunião",
      "Houveram-se muitos problemas",
    ],
    correctIndex: 1,
    explanation:
      "O verbo \"haver\" no sentido de \"existir\" é impessoal e fica no singular.",
  },
  {
    id: "int-023",
    category: "Interpretação de Texto",
    statement: "A expressão \"a olhos vistos\" significa:",
    options: [
      "Em segredo",
      "De forma evidente",
      "Com cautela",
      "De má vontade",
    ],
    correctIndex: 1,
    explanation:
      "Locução adverbial idiomática: \"a olhos vistos\" = visivelmente, claramente.",
  },
  {
    id: "int-024",
    category: "Interpretação de Texto",
    statement:
      "Em \"Quando chegamos, a aula já havia começado\", o tempo verbal de \"havia começado\" é:",
    options: [
      "Pretérito perfeito",
      "Pretérito imperfeito",
      "Pretérito mais-que-perfeito composto",
      "Futuro do pretérito",
    ],
    correctIndex: 2,
    explanation:
      "\"Havia + particípio\" indica ação anterior a outra no passado: pretérito mais-que-perfeito composto.",
  },
  {
    id: "int-025",
    category: "Interpretação de Texto",
    statement: "Qual frase apresenta crase corretamente empregada?",
    options: [
      "Vou à pé até a escola",
      "Refiro-me à você",
      "Cheguei à tempo da prova",
      "Entreguei o trabalho à professora",
    ],
    correctIndex: 3,
    explanation:
      "Crase ocorre na fusão da preposição \"a\" + artigo \"a\". \"À professora\" está correto. Não se usa crase antes de pronome pessoal nem de palavra masculina.",
  },
];

const SEEN_KEY = "nivelamento_seen_questions_v1";
type SeenMap = Record<string, Record<string, string[]>>;

const loadSeenMap = (): SeenMap => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(SEEN_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    return parsed && typeof parsed === "object" ? (parsed as SeenMap) : {};
  } catch {
    return {};
  }
};

const saveSeenMap = (map: SeenMap): void => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(SEEN_KEY, JSON.stringify(map));
  } catch {
  }
};

const shuffle = <T>(arr: T[]): T[] => {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j] as T, out[i] as T];
  }
  return out;
};

interface GetQuestionsOptions {
  unitNumber?: number;
  category?: QuestionCategory;
  count?: number;
  userKey?: string;
}

export const getRandomQuestions = (
  options: GetQuestionsOptions | number = {},
): Question[] => {
  const opts: GetQuestionsOptions =
    typeof options === "number" ? { count: options } : options;

  const count = opts.count ?? 5;
  const category =
    opts.category ??
    (opts.unitNumber !== undefined ? unitToCategory[opts.unitNumber] : undefined);

  const pool = category
    ? questionBank.filter((q) => q.category === category)
    : [...questionBank];

  if (pool.length === 0) return [];

  if (typeof window === "undefined") {
    return shuffle(pool).slice(0, Math.min(count, pool.length));
  }

  const userKey = opts.userKey ?? "anon";
  const categoryKey = category ?? "__free__";
  const seenMap = loadSeenMap();
  const seenForUser = seenMap[userKey] ?? {};
  const seenIds = new Set<string>(seenForUser[categoryKey] ?? []);

  const unseen = pool.filter((q) => !seenIds.has(q.id));
  const seen = pool.filter((q) => seenIds.has(q.id));

  const ordered = [...shuffle(unseen), ...shuffle(seen)];
  const selected = ordered.slice(0, Math.min(count, pool.length));

  const newlySeenIds = selected.map((q) => q.id);
  const allSeenAfter = new Set<string>([...seenIds, ...newlySeenIds]);
  const cycleEsgotado = allSeenAfter.size >= pool.length;
  const updatedSeen = cycleEsgotado ? newlySeenIds : Array.from(allSeenAfter);

  seenMap[userKey] = {
    ...seenForUser,
    [categoryKey]: updatedSeen,
  };
  saveSeenMap(seenMap);

  return selected;
};
