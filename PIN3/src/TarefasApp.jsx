import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


import axios from 'axios';
import RegisterPage from './pages/adminPages/RegisterPage/RegisterPage.ui';
import LoginPage from './pages/loginPage/LoginPage.ui';
import HomePageAdm from './pages/adminPages/HomePage/HomePageAdm.ui';
import HomePageCoord from './pages/coordenadorPages/HomePage/HomePageCoord.ui';
import HomePageAluno from './pages/alunoPages/HomePage/HomePageAl.ui';
import RelatorioDatePage from './pages/adminPages/RelatorioDatePage/RelatorioDatePage.ui';
import RelatorioList from './pages/adminPages/RelatorioPage/RelatorioListPage.ui'
import NewProjectCoord from './pages/coordenadorPages/NovoProjetoPage/NewProjectCoord.ui';
import SettingsPage from './pages/settingPage/SettingPage.ui'
import DetailsPage from './pages/coordenadorPages/DetailsProjectPage/DetailsProjectCoord.ui'
import DetailsPageAluno from './pages/alunoPages/DetailsProjectPage/DetailsProjectPageAl.ui'
import DetailsTaskPage from './pages/coordenadorPages/DetailsTaskPage/DetailsTaskCoord.ui'
import DetailsTaskPageAluno from './pages/alunoPages/DetailsTaskPage/DetailsTaskPageAl.ui'
import NewTaskPage from './pages/coordenadorPages/NewTaskPage/NewTaskCoord.ui'
import ViewAdminRel from './pages/adminPages/ExibeRelatorio/RelatorioPageView.ui'
import ViewCoordRel from './pages/coordenadorPages/ExibeRelatorio/RelatorioPageView.ui'
import AlterarParticipante from './pages/coordenadorPages/AlterarParticipantes/AlterarParticipantes.ui'

export default function TarefasApp() {
  const [count, setCount] = useState(0)

  return (
  
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/registroAdm/:id" element={<RegisterPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/homeAdm" element={<HomePageAdm/>} />
    <Route path="/homeCoord" element={<HomePageCoord/>} />
    <Route path="/homeAluno" element={<HomePageAluno/>} />
    <Route path="/novoRelatorio" element={<RelatorioDatePage/>} />
    <Route path="/novoProjeto/:idU" element={<NewProjectCoord/>} />
    <Route path="/relatoriosAdmin" element={<RelatorioList/>} />
    <Route path="/adminViewRelatorio/:id" element={<ViewAdminRel/>} />
    <Route path="/coordViewRelatorio" element={<ViewCoordRel/>} />
    <Route path="/settings" element={<SettingsPage/>} />
    <Route path="/detalhesProjeto/:projetoId" element={<DetailsPage/>} />
    <Route path="/detalhesTarefa/:taskId" element={<DetailsTaskPage/>} />
    <Route path="/detalhesTarefaAluno/:taskId" element={<DetailsTaskPageAluno/>} />
    <Route path="/detalhesProjetoAluno/:projetoId" element={<DetailsPageAluno/>} />
    <Route path="/novaTarefa/:id" element={<NewTaskPage/>} />

    <Route path="/alterarParticipantes/:projetoId" element={<AlterarParticipante/>} />

    </Routes>
    </BrowserRouter>
   
  );
}