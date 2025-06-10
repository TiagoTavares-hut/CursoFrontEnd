//model para Curriculo
export class Curriculo {

  // Atributos
  constructor(
    private _id: number,
    private _nome: string,
    private _email: string,
    private _telefone: string,
    private _endereco: string,
    private _formacao: string,
    private _experiencia: string,
    private _habilidades: string,
    private _objetivo: string
  ) {}

  //criar os metodos de acesso publico (getters e setters)
  public get id(): number {
    return this._id;
  }
  public set id(id: number) {
    this._id = id;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }
  public get email(): string {
    return this._email;
  }
  public set email(email: string) {
    this._email = email;
  }
  public get telefone(): string {
    return this._telefone;
  }
  public set telefone(telefone: string) {
    this._telefone = telefone;
  }
  public get endereco(): string {
    return this._endereco;
  }
  public set endereco(endereco: string) {
    this._endereco = endereco;
  }
  public get formacao(): string {
    return this._formacao;
  }
  public set formacao(formacao: string) {
    this._formacao = formacao;
  }
  public get experiencia(): string {
    return this._experiencia;
  }
  public set experiencia(experiencia: string) {
    this._experiencia = experiencia;
  }
  public get habilidades(): string {
    return this._habilidades;
  }
  public set habilidades(habilidades: string) {
    this._habilidades = habilidades;
  }
  public get objetivo(): string {
    return this._objetivo;
  }
  public set objetivo(objetivo: string) {
    this._objetivo = objetivo;
  }

  // metodos de conversao de objetos
  //obj => Json
  public toMap():{[key:string]:any}{ // retorna um objeto com chave e valor
    return{
      id: this._id,
      nome: this._nome,
      email: this._email,
      telefone: this._telefone,
      endereco: this._endereco,
      formacao: this._formacao,
      experiencia: this._experiencia,
      habilidades: this._habilidades,
      objetivo: this._objetivo
    }
  }
  //Json => obj
  static fromMap(map:any): Curriculo{
    return new Curriculo(
      map.id,
      map.nome,
      map.email,
      map.telefone,
      map.endereco,
      map.formacao,
      map.experiencia,
      map.habilidades,
      map.objetivo
    )
  }

}
