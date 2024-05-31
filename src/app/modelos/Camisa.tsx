export class Camisa {
  public codCamisa: number;
  public nombreCamisa: string;
  public protagonistaCamisa: string;
  public codGeneroCamisa: string;
  public imagenCamisa: string;
  public imagenCamisaBase64: string;

  constructor(codp: number, nomb: string, prot: string, gene: string, imag: string, base: string) {
    this.codCamisa = codp;
    this.nombreCamisa = nomb;
    this.protagonistaCamisa = prot;
    this.codGeneroCamisa = gene;
    this.imagenCamisa = imag;
    this.imagenCamisaBase64 = base;
  }
}
