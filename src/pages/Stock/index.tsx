import { useState } from "react";
import Layout from "../../view/layout";
import './stock.module.css'

export default function Stock() {
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState('');
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dataCompra, setDataCompra] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [BD, setBD] = useState<any[]>([]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCheckboxChange = (id: number) => {
    const index = selectedIds.indexOf(id);
    if (index === -1) {
      setSelectedIds([...selectedIds, id]);
    } else {
      const newSelectedIds = [...selectedIds];
      newSelectedIds.splice(index, 1);
      setSelectedIds(newSelectedIds);
    }
  };

  const handleSubmit = () => {
    const produto = {
      product,
      descricao,
      categoria,
      dataCompra,
      quantidade,
      preco,
      id: BD.length,
    };

    setBD([...BD, produto]);
  };

  const handleDelete = () => {
    const newBD = BD.filter((_, index) => !selectedIds.includes(index));
    setBD(newBD);
    setSelectedIds([]);
  };

  const handleEdit = () => {
    const editedBD = [...BD];
    selectedIds.forEach((index) => {
      editedBD[index] = {
        product,
        descricao,
        categoria,
        dataCompra,
        quantidade,
        preco,
        id: index,
      };
    });
    setBD(editedBD);
    setSelectedIds([]);
  };

    return (
        <Layout 
        mainContent={<div>
          <h1>Estoque</h1>
      <div id="botoes1">
        <button id="StockButton" onClick={openModal}>Gerenciar Estoque</button>
        {modalVisible && (
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h1>Gerenciador de produtos</h1>
              <div id="wrap">
                <input
                  type="text"
                  placeholder="Produto:"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Descrição"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="DataCompra"
                  value={dataCompra}
                  onChange={(e) => setDataCompra(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Quantidade"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Preço"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                />
              </div>
              <div id="botoes">
                <button onClick={handleSubmit}>Cadastrar</button>
                <button onClick={handleDelete}>Excluir</button>
                <button onClick={handleEdit}>Editar</button>
              </div>
              <div id="saida" className="tabelaModal">
                <table id="Stocktable" width="100%">
                  <thead>
                    <tr>
                      <td width="30px"></td>
                      <td>Nome</td>
                      <td>Descrição</td>
                      <td>Categoria</td>
                      <td>DataCompra</td>
                      <td>Quant.</td>
                      <td>Preço</td>
                    </tr>
                  </thead>
                  <tbody>
                    {BD.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedIds.includes(index)}
                            onChange={() => handleCheckboxChange(index)}
                          />
                        </td>
                        <td>{item.product}</td>
                        <td>{item.descricao}</td>
                        <td>{item.categoria}</td>
                        <td>{item.dataCompra}</td>
                        <td>{item.quantidade}</td>
                        <td>{item.preco}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <div id="saida2" className="tabelaprincipal">
        <table id="tabelaGrande" width="100%">
          <thead>
            <tr>
              <td width="30px"></td>
              <td>Nome</td>
              <td>Descrição</td>
              <td>Categoria</td>
              <td>DataCompra</td>
              <td>Quant.</td>
              <td>Preço</td>
            </tr>
          </thead>
          <tbody>
            {BD.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td>{item.product}</td>
                <td>{item.descricao}</td>
                <td>{item.categoria}</td>
                <td>{item.dataCompra}</td>
                <td>{item.quantidade}</td>
                <td>{item.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>}>
        </Layout>
    )

}