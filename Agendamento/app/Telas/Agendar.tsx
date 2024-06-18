import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  sala: {
    id: string;
    nome: string;
    descricao: string;
    equipamentos: string;
    // Outras propriedades da sala
  } | null; // Definir como opcional
  onNavigate: (screen: string) => void; // Adicionar onNavigate como prop
}

const AgendarScreen: React.FC<Props> = ({ sala, onNavigate }) => {
  // Verificar se sala está definida antes de acessar suas propriedades
  if (!sala) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nenhuma sala selecionada.</Text>
        <Text style={styles.link} onPress={() => onNavigate('CoordinatorHome')}>
          Sair
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sala.nome}</Text>
      <Text style={styles.description}>{sala.descricao}</Text>
      {/* Renderizar outros detalhes da sala, como equipamentos, etc. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  link: {
    color: 'red',
    marginTop: 15,
    textAlign: 'center',
  },
});

export default AgendarScreen;
