import { useState } from "react";
import Layout from "../../view/layout";
import { Container, Title, Paper, TextInput, Button, Table } from '@mantine/core';
import TableUser from "../../components/TableUser";

interface Product {
    name: string
    quantity: number
}

export default function Stock() {
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    const handleProductChange = (event: any) => {
        setProductName(event.target.value);
      };

    const handleQuantityChange = (event: any) => {
        setQuantity(event.target.value);
      };
    
      const handleAddProduct = () => {
        const newProduct = { name: productName, quantity: parseInt(quantity, 10)}
        setProducts([...products, newProduct])
        setProductName('')
        setQuantity('')
        console.log(`Adicionando ${quantity} unidades de ${productName} ao estoque.`);
      };

    return (
        <Layout 
        mainContent={
        <div>
            <Title order={1}>Gerenciamento de Estoque</Title>
            <Paper shadow="xs" style={{ maxWidth: 400 }}>
            <TextInput
          label="Nome do Produto"
          value={productName}
          onChange={handleProductChange}
          required
          style={{ marginBottom: '16px' }}
        />
        <TextInput
          label="Quantidade"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          required
          style={{ marginBottom: '24px' }}
        />
        <Button fullWidth onClick={handleAddProduct}>
          Adicionar ao Estoque
        </Button>
            </Paper>

        {products.length > 0 && (
          <Table style={{ marginTop: '24px' }}>
            <tbody>
            {products.map((product, index) => (
                <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                </tr>
            ))}
            </tbody>
          </Table>
        )}

        <TableUser/>
        </div>}>
        </Layout>
    )

}