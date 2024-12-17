import { Button } from "@ajk-ui/button";
import { Card } from "@ajk-ui/card";
import { CartItem, useCart } from "./CartContext";

interface ProductCartProps extends Omit<CartItem, "quantity"> {
  description: string;
  formatPrice: string;
}

export const ProductCart = ({
  id,
  name,
  description,
  price,
  formatPrice,
  subname,
  image,
}: ProductCartProps) => {
  const { addItem } = useCart();

  return (
    <Card
      variant="product"
      title={name}
      subtitle={formatPrice}
      description={description}
      image={image}
      badge="Nuevo"
    >
      <div className="flex mt-2">
        <Button
          onClick={() => {
            addItem({
              id,
              name,
              price,
              image,
              subname,
              quantity: 1,
            });
          }}
          variant="secondary"
        >
          Agregar al Carro
        </Button>
      </div>
    </Card>
  );
};
