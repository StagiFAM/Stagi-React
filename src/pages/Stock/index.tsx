import { useState } from "react";
import Layout from "../../view/layout";
import { ItemData } from "../../@types/types";
import { InventoryWrapper, StyledInputWrapper, StyledLabel } from "./style";
import { Button, Modal, Text } from "@mantine/core";
import ItemList from "../../context/ItemList";

export default function Stock() {
  const [items, setItems] = useState<ItemData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState<ItemData>({
    id: 0,
    nome: '',
    quantidade: 0,
    marca: '',
    dataValidade: '',
    preco: 0,
    inicio: '',
    saida: '',
  });

  const handleAddItem = () => {
    if (newItem.nome && newItem.marca && newItem.dataValidade && newItem.preco && newItem.inicio && newItem.saida) {
      setItems([...items, newItem]);
      setShowModal(false);
      setNewItem({
        id: 0,
        nome: '',
        quantidade: 0,
        marca: '',
        dataValidade: '',
        preco: 0,
        inicio: '',
        saida: '',
      });
    } else {
      // Lógica para lidar com campos em branco
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleDeleteItem = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleEditItem = (id: number) => {
    // Implemente a lógica para editar um item aqui
  };
  
    return (
        <Layout 
        mainContent={<InventoryWrapper>
          <Button onClick={() => setShowModal(true)}>Adicionar Item</Button>
          <Text size="xl" style={{ margin: '20px 0' }}>

          </Text>
          <ItemList items={items} onDelete={handleDeleteItem} onEdit={handleEditItem} />

          <Modal opened={showModal} onClose={() => setShowModal(false)} title="Adicionar Novo Item">
            <StyledInputWrapper>
              <StyledLabel>Nome:</StyledLabel>
              <input
                type="text"
                value={newItem.nome}
                onChange={(e) => setNewItem({ ...newItem, nome: e.target.value })} />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledLabel>Quantidade:</StyledLabel>
              <input
                type="number"
                value={newItem.quantidade}
                onChange={(e) => setNewItem({ ...newItem, quantidade: Number(e.target.value) })} />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledLabel>Marca:</StyledLabel>
              <input
                type="text"
                value={newItem.marca}
                onChange={(e) => setNewItem({ ...newItem, marca: e.target.value })} />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledLabel>Data de Validade:</StyledLabel>
              <input
                type="text"
                value={newItem.dataValidade}
                onChange={(e) => setNewItem({ ...newItem, dataValidade: e.target.value })} />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledLabel>Preço:</StyledLabel>
              <input
                type="number"
                value={newItem.preco}
                onChange={(e) => setNewItem({ ...newItem, preco: Number(e.target.value) })} />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledLabel>Início:</StyledLabel>
              <input
                type="text"
                value={newItem.inicio}
                onChange={(e) => setNewItem({ ...newItem, inicio: e.target.value })} />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <StyledLabel>Saída:</StyledLabel>
              <input
                type="text"
                value={newItem.saida}
                onChange={(e) => setNewItem({ ...newItem, saida: e.target.value })} />
            </StyledInputWrapper>
            <Button onClick={handleAddItem}>Adicionar</Button>
          </Modal>
        </InventoryWrapper>} children={undefined}>
        </Layout>
    )

}