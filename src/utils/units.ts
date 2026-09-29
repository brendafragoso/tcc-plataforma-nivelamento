export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Matemática Básica: operações e proporções",
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
    tiles: [
      { type: "star", description: "Operações fundamentais" },
      { type: "book", description: "Frações e números decimais" },
      { type: "star", description: "Porcentagem e proporção" },
      { type: "treasure" },
      { type: "book", description: "Potências e raízes" },
      { type: "trophy", description: "Revisão da Unidade 1" },
    ],
  },
  {
    unitNumber: 2,
    description: "Álgebra: equações e funções",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
    tiles: [
      { type: "fast-forward", description: "Álgebra essencial" },
      { type: "dumbbell", description: "Prática personalizada" },
      { type: "book", description: "Expressões algébricas" },
      { type: "treasure" },
      { type: "star", description: "Equações do 1º grau" },
      { type: "book", description: "Equações do 2º grau" },
      { type: "star", description: "Sistemas lineares" },
      { type: "book", description: "Função afim e quadrática" },
      { type: "treasure" },
      { type: "dumbbell", description: "Prática personalizada" },
      { type: "trophy", description: "Revisão da Unidade 2" },
    ],
  },
  {
    unitNumber: 3,
    description: "Interpretação de Texto e Língua Portuguesa",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      { type: "fast-forward", description: "Interpretação de texto" },
      { type: "book", description: "Tipos e gêneros textuais" },
      { type: "star", description: "Coesão e coerência" },
      { type: "treasure" },
      { type: "book", description: "Figuras de linguagem" },
      { type: "star", description: "Conjunções e conectivos" },
      { type: "treasure" },
      { type: "dumbbell", description: "Prática personalizada" },
      { type: "book", description: "Concordância verbal e nominal" },
      { type: "trophy", description: "Revisão da Unidade 3" },
    ],
  },
];
