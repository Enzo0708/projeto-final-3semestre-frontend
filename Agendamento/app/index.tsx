import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './Telas/login';
import RegisterScreen from './Telas/cadastro';
import HomeScreen from './Telas/Home';
import SalasScreen from './Telas/Salas';
import SalasReservadasScreen from './Telas/SalasReservadas';
import AgendamentoScreen from './Telas/Agendamento';
import AgendarScreen from './Telas/Agendar'; 
import Navbar from '@/components/NavBar';
import Drawer from '@/components/Drawer';
import CoordinatorHomeScreen from './Telas/CoordenadorHome';
import AdicionarSalaScreen from './Telas/AdicionarSala';
import ExcluirSalaScreen from './Telas/ExcluirSala';
import CoordinatorSalasScreen from './Telas/CoordenadorSalas'; // Certifique-se de importar corretamente

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('Login');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userType, setUserType] = useState('');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Login':
        return <LoginScreen onNavigate={setCurrentScreen} setUserType={setUserType} />;
      case 'Register':
        return <RegisterScreen onNavigate={setCurrentScreen} />;
      case 'Home':
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'Salas':
        return <SalasScreen onNavigate={setCurrentScreen} onRoomSelect={setSelectedRoom} />;
      case 'SalasReservadas':
        return <SalasReservadasScreen onNavigate={setCurrentScreen} />;
      case 'Agendamento':
        return <AgendamentoScreen room={selectedRoom} onNavigate={setCurrentScreen} />;
      case 'CoordinatorHome':
        return <CoordinatorHomeScreen onNavigate={setCurrentScreen} />;
      case 'AdicionarSala':
        return <AdicionarSalaScreen onNavigate={setCurrentScreen} />;
      case 'ExcluirSala':
        return <ExcluirSalaScreen onNavigate={setCurrentScreen} />;
      case 'CoordenadorSalas': // Certifique-se de que o nome da tela está correto aqui
        return <CoordinatorSalasScreen onNavigate={setCurrentScreen} />;
      case 'Agendar':
        return <AgendarScreen sala={selectedRoom} onNavigate={setCurrentScreen} />;
      default:
        return <LoginScreen onNavigate={setCurrentScreen} setUserType={setUserType} />;
    }
  };

  return (
    <View style={styles.container}>
      <Navbar onNavigate={setCurrentScreen} onOpenMenu={() => setIsDrawerOpen(true)} />
      {renderScreen()}
      {isDrawerOpen && <Drawer onClose={() => setIsDrawerOpen(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
