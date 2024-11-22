import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavHeader from '../../../components/HeaderMenu/NavHeader.ui';
import {
    HomeBodyAdm, HomeContainerAdm, StatusSectionAdm, StatusItemAdm, ProjectsSectionAdm, ReportsSectionAdm,
    ScrollContainerAdm, ProjectCardAdm, ReportCardAdm,
    StatusSectionConfigAdm,
    ProjectImageAdm,
    ProjectNameAdm,
    ProjectContainerAdm,
    TitleAdm,
    ReportContainerAdm,
    ReportNameAdm,
    ReportImageAdm,
    NewReportImageAdm,
    NewReportContainerAdm,
    NewReportTitleAdm
} from './HomePageAdm.styles';
import UserIcon from '../../../assets/images/NewUser.png'; 
import ReportIcon from '../../../assets/images/RelatorioIcon.png'; 
import NewReportIcon from '../../../assets/images/NewReport.png'; 
import AuthContext from '../../../AuthContext';



export default function HomePage() {
    const navigate = useNavigate();
    const {authData, setAuthData } = useContext(AuthContext);

   
    

    return (
        <HomeBodyAdm>
            <NavHeader/>

            <HomeContainerAdm>
                
 
 
              
              
                <ReportContainerAdm>
                    <TitleAdm>Meus Relatórios</TitleAdm>
                    
                <ReportsSectionAdm>
                    
                   
                            <ReportCardAdm 
                            onClick={() => navigate(`/relatoriosAdmin`)}>
                                <ReportImageAdm src={ReportIcon} alt='Project-Icon'/>
                                 <ReportNameAdm></ReportNameAdm>
                        
                            </ReportCardAdm>
                     
                    
                    <NewReportContainerAdm>
                                <NewReportImageAdm onClick={() => navigate('/novoRelatorio')}
                                        src={NewReportIcon} alt='New-Report' />
                                        <NewReportTitleAdm>Novo Relatório</NewReportTitleAdm>
                                        
                        </NewReportContainerAdm>
                        <NewReportContainerAdm>
                        <NewReportImageAdm onClick={() => navigate(`/registroAdm/${authData.idU}`)}
                                        src={UserIcon} alt='New-Report' />
                                        <NewReportTitleAdm>Novo Usuário</NewReportTitleAdm>
                                        </NewReportContainerAdm>
                </ReportsSectionAdm>
                </ReportContainerAdm>
                
            </HomeContainerAdm>
            
        </HomeBodyAdm>
    );
}
