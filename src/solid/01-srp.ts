(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.

    class ProductService {

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct(product:Product){
            console.log('guardando productos en la base de datos',product);
        }
    }

    class Mailer {

        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    }

    class ProductBloc {
        
        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService,mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }

        loadProduct(id:number){
            this.productService.loadProduct(id);
        }

        saveProduct(product:Product){
            this.productService.saveProduct(product);
        }

        notifyClients(){
            this.mailer.notifyClients()
        }
    
    }

    class CartBloc {
        private itemsCart:number[] = [];
        
        addToCart( productId: number ) {
            this.itemsCart.push(productId);
        }

    }
    


   const productService = new ProductService();
   const mailer = new Mailer();

   const productBloc = new ProductBloc(productService,mailer); 


   productBloc.loadProduct(12);
   productBloc.notifyClients();
   productBloc.saveProduct({id:1,name:'jose julian'});








})();