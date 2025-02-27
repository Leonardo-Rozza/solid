(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  class Mailer {
    private globalEmail: string = "Leo@google.com";

    sendEmails(emailsList: string[], template: "to-client" | "to-admins") {
      console.log("Enviando correo a los clientes", template);
    }
  }
  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    private poductService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.poductService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.poductService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.poductService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmails(["pepe@google.com"], "to-client");
    }
  }

  class CartBloc {
    private items: Object[] = [];

    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productBloc = new ProductBloc(new ProductService(), new Mailer());
  const carBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  carBloc.onAddToCart(10);
})();
