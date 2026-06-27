/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface HasTitle {
  title: string;
}

class Component<T> {
  constructor (public props: T) {

  }
}

class Page extends Component<HasTitle> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};