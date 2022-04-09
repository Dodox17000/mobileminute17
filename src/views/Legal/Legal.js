import React, {Suspense} from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Typography from '@mui/material/Typography';
import Loader from 'components/Loader';


const Legal = () => {

  return (
    <Suspense fallback={<Loader/>}>
      <Main>
        <Box
          bgcolor={'alternate.main'}
          height={1}
          sx={{
            opacity: '1',
            zIndex: 1,
      
          }}
        />
        <Box
          paddingTop={3}
          bgcolor={'alternate.main'}
          justifyContent={'space-between'}
          alignItems={{ xs: 'center', sm: 'center' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box  textAlign='center'>
            <Typography sx={{ fontWeight: 700, marginTop:5, marginBottom: 10 }} variant={'h3'} gutterBottom>
               Mentions Légales et Conditions Générales
            </Typography>
            <Box textAlign='left' textJustify='center' paddingLeft="2rem">
              <Typography sx={{ fontSize: 25,fontWeight: 700 }} color={'text.secondary'}>
              TECHNOLOGY CENTER
              </Typography>
            </Box>
            <Box textAlign='left' textJustify='justify' padding="2rem">
              <Typography variant={'p'} >
              Raison sociale : SARL Technology Center 
                <br/>
              Adresse : 18 RUE DUPATY, 17000 LA ROCHELLE 
                <br/>
              Activité (Code NAF ou APE) : Commerce de détail d&apos;ordinateurs, d&apos;unités périphériques et de logiciels en magasin spécialisé (4741Z) 
                <br/>
              Date de création : 10-01-2018
                <br/>
              Siret: 83463662300011
                <br/>
              Capital social : 5001 €
              </Typography>
              <Typography sx={{ fontSize: 25, fontWeight:700, marginTop: 10, marginBottom: 5 }} color={'text.secondary'}>
              Edition du site internet
              </Typography>
              <Typography variant={'p'}>
              Site web réalisé par <span><b>Dorine Giustina</b></span>
                <br/>
                <br/>
                <b>Technology Center</b> tient à rappeler son engagement sur le respect de la confiance que vous lui accordez et à appliquer ainsi les obligations de la loi modifiée 78-17 du 6 janvier 1978 relative à « l’informatique, aux fichiers et aux libertés » selon la CNIL (Commission Nationale de l’Informatique et des Libertés): www.cnil.fr; 
              de même pour les principes déontologiques qui en découlent quant aux informations personnelles que vous pouvez être amené à lui communiquer dans le cadre de votre naviguation sur le site Internet mobile-minute.fr 
                <br/>
                <br/>
              Vous disposez d’un droit d’accès, de modification, de rectification et de suppression des données qui vous concernent. 
              </Typography>
              <Typography sx={{ fontSize: 25, fontWeight:700, marginTop: 10, marginBottom: 5 }} color={'text.secondary'}>
              Conditions d’utilisation
              </Typography>
              <Typography variant={'p'}>
                <b>Technology Center</b> est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…). Pour un meilleur confort d’utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc.
                <br/>
                <br/>
                <b>Technology Center</b> met en œuvre tous les moyens dont elle dispose pour assurer une information fiable et une mise à jour fiable de son site internet. Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de <b>Technology Center</b>, et signaler toutes modifications du site qu’il jugerait utile. N’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
              </Typography>
              <Typography sx={{ fontSize: 25, fontWeight: 700, marginTop: 10, marginBottom: 5}} color={'text.secondary'}>
              Politique de cookies et confidentialité
              </Typography>
              <Typography sx={{ marginBottom: 2, fontWeight: 650, fontSize: 20 }}>
                Cookies :
              </Typography>
              <Typography variant={'p'}>
              Le site <b>Technology Center</b> peut être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations. Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.
              </Typography>
              <Typography sx={{  marginBottom: 2, fontWeight: 650, fontSize: 20, marginTop: 5}}>
              Liens hypertextes :
              </Typography>
              <Typography variant={'p'}>
              Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. <b>Technology Center</b> ne dispose d’aucun moyen pour contrôler les sites en connexion avec ses sites internet, ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit. L’entreprise ne peut être tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les risques liés à cette utilisation incombent pleinement à l’internaute, qui doit se conformer à leurs conditions d’utilisation.
                <br/>
                <br/>
              Les utilisateurs, les abonnés et les visiteurs des sites internet ne peuvent pas mettre en place un hyperlien en direction de ce site sans l’autorisation expresse et préalable de <b>Technology Center</b>.
              </Typography>
              <Typography sx={{ marginBottom: 2, fontWeight: 650, fontSize: 20, marginTop: 5}}>
                Services fournis :
              </Typography>
              <Typography variant={'p'}>
              L’ensemble des activités de la société ainsi que ses informations sont présentés sur notre site <b>Technology Center</b>.
                <br/>
                <br/>
                <b>Technology Center</b> s’efforce de fournir sur le site <b>mobile-minute.fr</b> des informations aussi précises que possible. Les renseignements figurant sur le site <b>mobile-minute.fr</b> ne sont pas exhaustifs et les photos non contractuelles. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, tous les informations indiquées sur le site <b>mobile-minute.fr</b> sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.
              </Typography>
              <Typography sx={{ marginBottom: 2, fontSize: 25, fontWeight: 700, marginTop: 5}} color={'text.secondary'}>
              Limitation contractuelles sur les données :
              </Typography>
              <Typography variant={'p'}>
              Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l’adresse <b>contact</b>, en décrivant le problème de la manière la plus précise possible (page posant problème, type d’ordinateur et de navigateur utilisé, …).
              Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité. En conséquence, ne saurait être tenu responsable d’un quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de données consécutives au téléchargement. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
                <br/>
                <br/>
              Les liens hypertextes mis en place dans le cadre du présent site internet en direction d’autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de <b>Technology Center</b>.
              </Typography>
              <Typography sx={{ marginBottom: 2, fontSize: 25, fontWeight: 700, marginTop: 5}} color={'text.secondary'}>
              Propriété intellectuelle :
              </Typography>
              <Typography variant={'p'}>
              Tout le contenu du présent site <b>mobile-minute.fr</b>, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.
                <br/>
                <br/>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l’accord exprès par écrit de <b>Technology Center</b>. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.
              </Typography>
              <Typography sx={{ marginBottom: 2, fontSize: 25, fontWeight: 700, marginTop: 5}} color={'text.secondary'}>
              Litiges :
              </Typography>
              <Typography variant={'p'}>
              Les présentes conditions du site <b>mobile-minute.fr</b> sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l’interprétation ou de l’exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société. La langue de référence, pour le règlement de contentieux éventuels, est le français.
              </Typography>
              <Typography sx={{ marginBottom: 2, fontSize: 25, fontWeight: 700, marginTop: 5}} color={'text.secondary'}>
              Données personnelles :
              </Typography>
              <Typography variant={'p'}>
                <b>Technology Center</b> est le responsable du traitement des données collectées sur le site de <b>mobile-minute.fr</b>.
                <br/>
              L’utilisateur est notamment informé que conformément à l’article 32 de la loi Informatique et libertés du 6 janvier 1978 modifiée, les informations qu’il communique par les formulaires présents sur le site de <b>mobile-minute.fr</b> sont nécessaires pour répondre à sa demande et sont destinées aux services en charge de répondre à sa demande à des fins de suivi de cette demande.
                <br/>
                <br/>
              Conformément aux dispositions des articles 39 et 40 de la loi « Informatique et Libertés » du 6 janvier 1978 modifiée en 2004, l’utilisateur bénéficie d’un droit d’accès, de rectification, de mise à jour et d’effacement des informations qui le concernent, qu’il peut exercer en s’adressant à mobileminute@outlook.fr, ou par courrier à <b>Technology Center</b>, en précisant dans l’objet du courrier « Droit des personnes » et en joignant la copie de son justificatif d’identité.
                <br/>
                <br/>
              Vous bénéficiez également du droit de donner des directives sur le sort de vos données après votre décès.
                <br/>
                <br/>
              Conformément aux dispositions de l’article 38 de la loi « Informatique et Libertés » du 6 janvier 1978 modifiée en 2004, l’utilisateur peut également s’opposer, pour des motifs légitimes à ce que ses données fassent l’objet d’un traitement et sans motif et sans frais, à ce que ses données soient utilisées à des fins de prospection commerciale.
                <br/>
                <br/>
              L’utilisateur est informé que lors de ses visites sur le site <b>mobile-minute.fr</b>, un cookie peut s’installer automatiquement sur son logiciel de navigation.
                <br/>
                <br/>
              Les informations recueillies sur ce site seront conservées pendant une durée de trois ans.
                <br/>
                <br/>
              Le cookie est un bloc de données qui ne permet pas d’identifier les utilisateurs mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site. Le paramétrage du logiciel de navigation permet d’informer de la présence de cookie et éventuellement, de la refuser de la manière décrite à l’adresse suivante www.cnil.fr.
                <br/>
                <br/>
              L’utilisateur dispose d’un droit d’accès, de retrait et de modification des données à caractère personnel communiquées par le biais des cookies dans les conditions indiquées ci-dessus.
                <br/>
                <br/>
              L’utilisateur du site de <b>mobile-minute.fr</b> est tenu de respecter les dispositions de la loi Informatique et libertés du 6 janvier 1978 modifiée dont la violation est passible de sanctions pénales. Il doit notamment s’abstenir, s’agissant des informations nominatives auxquelles il accède, de toute collecte, de toute utilisation détournée, et d’une manière générale, de tout acte susceptible de porter atteinte à la vie privée ou à la réputation des personnes.
              </Typography>
              <br/>
            </Box>
          </Box>
        </Box>
      </Main>   
    </Suspense>
  );
};
export default Legal;
