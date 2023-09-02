import { styled } from '@mui/material/styles';
import { Badge, Button, Grid, IconButton, Typography } from "@mui/material";
import { IoCloseOutline } from 'react-icons/io5';
import { RiVideoUploadFill } from 'react-icons/ri';
import DialogContent from '@mui/material/DialogContent';
import { IoIosArrowDown } from 'react-icons/io'

export const ImageContainer = styled('div')({
    position: 'relative',
    display: 'inline-block',
    marginTop: "10px !important"
});
export const Content = styled(DialogContent)({
    overflowX: 'hidden',
});

export const CloseBadge = styled(Badge)({
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    width: '20px',
    height: '20px',
    backgroundColor: '#E85347 ',
    borderRadius: '50%',
});

export const CloseIconStyled = styled(IoCloseOutline)({
    color: 'white',
    margin: '1.5px'
});

export const Input = styled('input')({
    display: 'none',
});

export const Icon = styled(RiVideoUploadFill)({
    marginRight: '8px',
});

export const Action = styled('button')({
    color: 'white',
    margin: '1.5px',
    marginLeft: "10px",
    fontSize: '22px',
    fontWeight: "500",
    height: "39px",
    width: '40px',
    textAlign: 'center',
    border: "none",
    borderRadius: '5px',
});

export const Label = styled('label')({
    border: '1px dashed #DBDFEA',
    height: '40px',
    backgroundColor: '#F5F6FA',
    borderRadius: '5px',
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
    cursor: 'pointer',
});

export const UploadButton = styled(Button)({
    color: '#526484 ',
    fontSize: "16px",
});

export const Tabel = styled('div')({
    // width: '96%',
    height: '48.7vh',
    marginBottom: "2%",
    color: '#526484'
});

export const MiniTabel = styled('div')({
    // width: '96%',
    height: '38.65vh',
    marginBottom: "2%",
    marginLeft:"1.60%",
    marginRight:"1.85%",
    color: '#526484'
});

export const Img = styled('img')({
    width: '90px',
    height: '40px',
    borderRadius: "8px",
    marginRight: "8px",
});



export const NoDataImg = styled('img')({
    width: '300px',
    height: '200px',
    borderRadius: "10px",

});

export const AvatarWrapper = styled('div')`
margin-right: 8px;
`;


export const Name = styled('span')({
    marginTop: '6px',
    font: 'normal normal bold 17px/21px DM Sans',
});

export const Email = styled('span')({
    color: '#526484',
    marginTop: '-0px',
    font: 'normal normal medium 12px/16px DM Sans',
});

export const Info = styled('div')({
    font: 'normal normal medium 11px/15px DM Sans',
    color: '#8094AE',
    height: '35px',
    background: '#EBEEF2',
    width: '98%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
});

export const Row = styled('div')({
    borderBottom: '1px solid #dbdfea',
    display: 'flex',
    height: '3.5rem',
    alignItems: 'center',
    width: '98%',
});

export const Details = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

export const Arrow = styled(IoIosArrowDown)({
    position: "relative",
    left: "5px"
});

export const NameBar = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
});

export const BrandLogo = styled('img')({
    width: '90%',
    height: '90%',
    borderRadius: "8px",
    // marginRight: "10px",
});

export const UplaodButton = styled(IconButton)({
    fontSize: "58px",
    color: 'white',
    background: "#1c8adb",
    width: "210px",
    height: '210px'
    // marginRight: "10px",
});

export const Media = styled("img")({
    width: "300px",
    height: "180px",
});