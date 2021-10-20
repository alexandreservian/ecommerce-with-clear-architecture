interface IData {
  id: number;
  category: string;
  description: string;
  price: number;
  height: number;
  width: number;
  depth: number;
  weight: number;
}

class Item {
  readonly volume: number;
  readonly density: number;

  constructor(readonly data: IData) {
    this.volume = this.calculateVolume();
    this.density = this.calculateDensity();
  }

  private calculateVolume(): number {
    const { height, width, depth } = this.data;
    return (height * width * depth) / 100;
  }

  private calculateDensity(): number {
    const { weight } = this.data;
    return weight * this.volume;
  }
}

export default Item;
