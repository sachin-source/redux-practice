import { Collapse } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({


    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#c51162',
        },
    },
    typography: {
        fontFamily: 'Dm Sans, sans-serif',
        h1: {
            letterSpacing: '0px',
            color: '#000000',
            font: 'normal normal bold 28px/37px'
        },
        h2: {
            color: '#000000',
            font: 'normal normal medium 18px/24px'
        },

        h4: {
            color: '#000000',
            font: 'normal normal normal 14px/19px'
        },
    },


    components: {
        MuiButton: {

            variants: [
                {
                    props: { variant: 'B0' },
                    style: {
                        background: 'white',
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: '14px',
                        border: '1px solid #dbdfea',
                        textTransform: 'none',
                        font: 'normal normal bold 18px/24px DM Sans',
                        height: '40px',
                        borderRadius: '9px',
                        marginRight: '15px',

                        '&:hover': {
                            background: 'black',
                            color: 'white',
                        },
                    },
                },
                {
                    props: { variant: 'B1' },
                    style: {
                        background: 'white',
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: '14px',
                        border: '1px solid #dbdfea',
                        textTransform: 'none',
                        font: 'normal normal bold 18px/24px DM Sans',
                        width: '140px',
                        height: '45px',
                        borderRadius: '9px',
                        '&:hover': {
                            background: 'black',
                            color: 'white',
                        },
                    },
                },
                {
                    props: { variant: 'B2' },
                    style: {
                        color: "#8094AE",
                        fontSize: "14px",
                        border: "1px solid #DBDFEA",
                        textTransform: "none",
                        width: "fit-content",
                        height: "30px",
                        marginLeft: "10px",
                        borderRadius: "19px",
                        background: "#FFFFFF",
                        '&:hover': {
                            background: 'black',
                            color: 'white',
                        },
                    },
                },
                {
                    props: { variant: 'B3' },
                    style: {
                        color: "#8094AE",
                        fontSize: "14px",
                        border: "1px solid #DBDFEA",
                        textTransform: "none",
                        width: "fit-content",
                        height: "30px",
                        borderRadius: "19px",
                        background: "#FFFFFF",
                        '&:hover': {
                            background: 'black',
                            color: 'white',
                        },
                    },
                },
                {
                    props: { variant: 'B4' },
                    style: {
                        background: 'white',
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: '18px',
                        border: '1px solid #dbdfea',
                        textTransform: 'none',
                        fontFamily: 'DM Sans',
                        width: '100%',
                        height: '45px',
                        borderRadius: '9px',
                        '&:hover': {
                            background: 'black',
                            color: 'white',
                        },
                    },
                },
                {
                    props: { variant: 'B5' },
                    style: {
                        color: '#526484 ',
                        fontSize: "16px",
                        background: '#ebebf2',
                        marginRight: "15px"
                    },
                },
                {
                    props: { variant: 'B6' },
                    style: {
                        background: 'black',
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: '16px',
                        marginTop: "16px",
                        textTransform: 'none',
                        height: '45px',
                        borderRadius: '9px',
                        '&:hover': {
                            background: '#100e0ede',
                            color: 'white',
                        },
                    },
                },
                {
                    props: { variant: 'B7' },
                    style: {
                        background: '#4285f4',
                        fontWeight: 'medium',
                        color: 'white',
                        fontSize: '16px',
                        marginTop: "16px",

                        textTransform: 'none',
                        height: '45px',
                        borderRadius: '9px',
                        '&:hover': {
                            background: '#100e0ede',
                            color: 'white',
                        },
                    },
                },
                {
                    props: { variant: 'Tab' },
                    style: {
                        background: 'white',
                        fontWeight: 'medium',
                        fontFamily: 'DM Sans',
                        color: 'black',
                        fontSize: '16px',

                        borderRight: '1px solid #657195',
                        borderTop: '1px solid #657195',
                        borderBottom: '1px solid #657195',
                        textTransform: 'none',
                        height: '35px',
                        msTransform: 'skewX(-20deg)',
                        webkitTransform: 'skewX(-20deg)',
                        transform: 'skewX(-20deg)',
                        '&:hover': {
                            background: '#657195',
                            color: 'white',
                        },
                    },
                },
                {
                    props: { variant: 'B8' },
                    style: {
                        background: 'white',
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: '14px',
                        border: '1px solid #dbdfea',
                        textTransform: 'none',
                        font: 'normal normal bold 18px/24px DM Sans',
                        width: 'fit-content',
                        height: '35px',

                        borderRadius: '9px',
                        '&:hover': {
                            background: 'black',
                            color: 'white',
                        },
                    },
                },
                {
                    props: { variant: 'B9' },
                    style: {
                        marginRight: '10px',
                        background: 'white',
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: '15px',
                        border: '1px solid #526484',
                        fontFamily: 'DM Sans',
                        textTransform: 'none',
                        '&:hover': {
                            background: 'black',
                            color: 'white',
                        },
                    },
                },

            ],
        },
        MuiTypography: {
            styleOverrides: {
                P0: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                    '&:hover': {
                        color: 'black',
                    },
                    marginTop: "-3px"
                },
                PLogin: {
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontFamily: "DM Sans",
                },
                P1: {
                    fontSize: '15px',
                    fontWeight: 'bold',
                },
                P2: {
                    fontSize: '25px',
                    fontWeight: 'bold',

                    '&:hover': {
                        color: 'black',
                    },
                },
                P3: {
                    fontSize: '15px',
                    lineHeight: '20px',
                    height: "25px",
                    fontWeight: 'normel',
                    '&:hover': {
                        color: 'black',
                    },
                },
                P11: {
                    fontSize: '18px',
                    fontWeight: 'bold',
                },
                P12: {
                    fontSize: '17px',
                    fontWeight: 'Bold',
                    color: 'black',
                },
                P13: {
                    fontSize: '15px',
                    fontWeight: 'Bold',
                    color: '#526484',
                },
                P14: {
                    fontSize: '15px',
                    fontWeight: 'normal',
                    color: 'black',
                },
                P15: {
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'black',
                },
                P21: {
                    fontSize: '20px',
                    fontWeight: '600',
                    color: 'black',
                },
                P22: {

                    fontWeight: '600',
                    color: '#344357',
                },
                P23: {
                    fontSize: "13px",
                    fontWeight: '500',
                    color: 'red',
                },
                C1: {
                    fontSize: '19px',
                    fontWeight: '600',
                },
                C2: {
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#657195'
                },
                C3: {
                    fontSize: '15px',
                    fontWeight: 'normel',
                    color: "#6eddbf"
                },
                C4: {
                    fontSize: '13px',
                    color: '#767e8a',
                    fontWeight: 'normel',
                },
                C5: {
                    fontSize: '13px',
                    color: '#767e8a',
                    fontWeight: 'normel',
                },
                C6: {
                    fontWeight: 'medium',
                    fontFamily: '16px',
                    color: '#8094AE',
                    width: '20%',
                },
                C7: {
                    fontWeight: 'medium',
                    fontFamily: '16px',
                    color: '#526484',
                    width: '80%',
                },
                C8: {
                    marginRight: '16px',
                    marginTop: "5px",
                    fontWeight: 'bold',
                    color: "#526484",
                    fontSize: "11px"
                },
                C9: {
                    marginRight: '16px',
                    marginTop: "-4px",
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'Black',
                },
                C10: {
                    fontSize: '15px',
                    color: '#4caf50',
                    fontWeight: 'medium',
                    marginRight: "5px",
                    marginTop: "0px"
                },
                C11: {
                    fontSize: '16px',
                    color: "#8094AE",
                    fontWeight: 'medium',
                    // fontFamily:"Roboto"
                },
               
               
            },
        },

        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    width: '92%',
                    marginLeft: '4%',
                    color: 'black',
                    marginTop: '5px',
                    '&:hover': {
                        color: 'black',
                    },
                },
            },

        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    backgroundColor: '#ffffff',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        lineHeight: "normal",
                        '& fieldset': {
                            borderColor: '#DBDFEA',
                        },
                        '&:hover fieldset': {
                            borderColor: '#DBDFEA',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#DBDFEA',
                        },
                    },
                    ".MuiInputBase-input::placeholder": {
                        color: "#CFD3DE"
                    },
                    borderRadius: '8px'
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
                    backgroundColor: '#fff',
                    padding: '16px',
                },
                toolbar: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    flexWrap: 'wrap',
                },
                caption: {
                    flexShrink: 0,
                },
                selectRoot: {
                    marginRight: '16px',
                },
                select: {
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '12px',
                    paddingLeft: '8px',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 0, 0, 0.23)',
                    height: '40px',
                    '&:focus': {
                        borderColor: '#80bdff',
                        boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
                    },
                },
                selectIcon: {
                    marginLeft: '8px',
                },
                input: {
                    marginLeft: '8px',
                    flexShrink: 0,
                    width: '60px',
                    height: '40px',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 0, 0, 0.23)',
                    padding: '0 8px',
                    boxSizing: 'border-box',
                    '&:focus': {
                        borderColor: '#80bdff',
                        boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
                    },
                },
                actions: {
                    marginLeft: 'auto',
                },
            },
        },
        MuiAppBar: {

            variants: [
                {
                    props: { variant: 'A1' },
                    style: {

                        display: "flex",
                        justifyContent: 'center',
                        width: "96%",
                        marginTop: "10px",

                    },
                },
                {
                    props: { variant: 'A2' },
                    style: {
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        width: "25%",
                        marginTop: "0px",
                        
                    },
                },
                {
                    props: { variant: 'A3' },
                    style: {
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        width: "25%",
                        marginTop: "-90px"
                    },
                },
            ],
        },
        MuiGrid: {
            variants: [
                {
                    props: { variant: 'Login' },
                    style: {

                        height: "100vh",
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: "column",
                        background: "#F5F6FA"
                    },
                },
                {
                    props: { variant: 'G1' },
                    style: {
                        background: '#FFFFFF',
                        boxShadow: '0px 1px 3px #364A6305',
                        borderRadius: '5px',

                    },
                },

                {
                    props: { variant: 'G2' },
                    style: {
                        height: '70px',
                        width: '100%',
                        border: '1px solid #c8c8c8',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        borderRadius: '9px',
                        alignItems: 'flex-start',
                        background: '#ebebf2',
                    },
                },
                {
                    props: { variant: 'G3' },
                    style: {
                        background: '#ebebf2',

                        borderRadius: '8px',

                    },
                },
                {
                    props: { variant: 'G10' },
                    style: {

                        borderBottom: '1px solid #DBDFEA',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                },
                {
                    props: { variant: 'G11' },
                    style: {
                        display: "flex",
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: "100%",
                        marginBottom: "14px",
                        font: "normal normal bold 18px/24px DM Sans",
                        height: "60px",
                        borderBottom: "1px solid #dbdfea",

                    },
                },
                {
                    props: { variant: 'GH' },
                    style: {
                        color: "#8094ae",
                        marginTop: "12px",
                        fontWeight: 'normal',
                        fontSize: '16px',
                    },
                },
                {
                    props: { variant: 'GV' },
                    style: {
                        fontWeight: 'medium',
                        fontSize: '16px',
                        color: "#526484",
                        marginTop: "6px"
                    },
                },
                {
                    props: { variant: 'GR' },
                    style: {
                        textAlign: "left",
                        fontWeight: 'medium',
                        fontSize: '16px',
                        color: "#526484",
                    },
                },
                {
                    props: { variant: 'GL' },
                    style: {
                        textAlign: "left",
                        color: "#8094ae",
                        fontWeight: 'normal',
                        fontSize: '16px',
                    },
                },
                {
                    props: { variant: 'Head' },
                    style: {
                        font: "normal normal bold 18px/24px DM Sans",
                        color: "#000000",
                        marginTop: "10px",
                        width: "97.8%",
                        marginLeft: "1.2%",
                        maxHeight: "40px",
                        display: "flex",
                        alignItems: "center",
                    },
                },
                {
                    props: { variant: 'Table' },
                    style: {
                        display: 'flex', width: "97.8%", marginLeft: "1.2%", maxHeight: "50px"
                    },
                },
                {
                    props: { variant: 'body' },
                    style: {
                        borderBottom: '1px solid #DBDFEA', height: "50px", display: 'flex', alignItems: 'center'
                    },
                },
                {
                    props: { variant: 'G21' },
                    style: {
                        borderBottom: '1px solid #c8c8c8', height: '50px', display: 'flex', alignItems: 'flex-end'
                    },
                },
                {
                    props: { variant: 'G21-A' },
                    style: {
                        borderBottom: '1px solid #c8c8c8', height: '30px', display: 'flex', alignItems: 'flex-end'
                    },
                },
                {
                    props: { variant: 'G22' },
                    style: {
                        marginTop: '8px', marginBottom: '4px', display: 'flex', justifyContent: 'space-between'
                    },
                },
                {
                    props: { variant: 'G23' },
                    style: {
                        display: 'flex', flexDirection: 'column'
                    },
                },
                {
                    props: { variant: 'G24' },
                    style: {
                        display: 'flex', flexDirection: 'column',
                        boxShadow: '0px 1px 3px #364A6305',
                        border: "1px solid black",
                        borderRadius: '12px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: "20px",
                        marginLeft: '30px',
                        marginBottom: '10px',
                    },
                },
                {
                    props: { variant: 'G12' },
                    style: {
                        borderRight: "1px solid #dbdfea"
                    },
                },
                {
                    props: { variant: 'G13' },
                    style: {
                        marginTop: '15px',
                        display: "flex",
                        justifyContent: 'right',
                        alignItems: "center",
                    },
                },
                {
                    props: { variant: 'G14' },
                    style: {
                        color: "#8094ae",
                        marginTop: "12px",
                        fontWeight: "normal",
                        fontSize: "16px",
                        fontFamily: "DM Sans",

                    },
                },
                {
                    props: { variant: 'G15' },
                    style: {

                        fontWeight: "medium",
                        fontSize: "16px",
                        fontFamily: "DM Sans",
                        color: "#526484",
                        marginTop: "6px"
                    },
                },
                {
                    props: { variant: 'G16' },
                    style: {
                        marginTop: '14px',
                        marginBottom: '8px',
                        display: 'flex',
                        justifyContent: 'center',
                    },
                },
                {
                    props: { variant: 'G18' },
                    style: {
                        borderRadius: "10px",
                        background: "white",
                    },
                },
                {
                    props: { variant: 'G17' },
                    style: {
                        display: "flex",
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        marginTop: "25px",
                        marginBottom: "15px",
                    }
                },

                {
                    props: { variant: 'PG1' },
                    style: {
                        minHeight: '70vh',
                        borderRight: '1px solid #dbdfea',
                    }
                },
                {
                    props: { variant: 'PG2' },
                    style: {
                        borderBottom: '1px solid #dbdfea',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '6rem',
                    }
                },
                {
                    props: { variant: 'PG3' },
                    style: {
                        height: '5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }
                }

            ],
        },
        MuiTable: {
            variants: [
                {
                    props: { variant: 'T1' },
                    style: {
                        border: '1px solid #DBDFEA',
                        borderRadius: '10px',
                        borderCollapse: "separate"
                    },
                },
            ],
        },

        MuiTableCell: {
            variants: [
                {
                    props: { variant: 'TH1' },
                    style: {
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: "600",
                        letterSpacing: "0.5px",
                        fontSize: "14px",
                        fontFamily: 'DM Sans',
                        color: '#526484'
                    },
                },
                {
                    props: { variant: 'TB1' },
                    style: {
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: "normal",
                        fontSize: "13px",
                        fontFamily: 'DM Sans',
                        color: '#526484'
                    },
                },

            ],
        },
        MuiPaper: {
            variants: [
                {
                    props: { variant: 'Box1' },
                    style: {
                        width: "100%", boxShadow: "0px 1px 3px #364A6305", border: "none", marginTop: "25px"
                    },
                },
                {
                    props: { variant: 'A2' },
                    style: {
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "center",
                        width: "25%",


                    },
                },


            ],
        },
        MuiIconButton: {
            variants: [
                {
                    props: { variant: 'IB0' },
                    style: {
                        width: "50px", border: "none",
                    },
                },
                {
                    props: { variant: 'IB1' },
                    style: {
                        borderRadius: '0px',
                        borderTopRightRadius: '8px',
                        borderBottomRightRadius: '8px',
                        borderTop: "1px solid #c8c8c8",
                        borderBottom: "1px solid #c8c8c8",
                        borderRight: "1px solid #c8c8c8",
                        height: '40px',
                        width: '50px',
                        marginLeft: "-5px",
                        backgroundColor: '#657195'
                    },
                },

            ],
        },
        MuiMenuItem: {
            variants: [
                {
                    props: { variant: 'M1' },
                    style: {
                        backgroundColor: '#F5F6FA',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                        color: 'black',
                        height: '86px',
                        marginTop: '-8px',
                        borderTopLeftRadius: '5px',
                        borderTopRightRadius: '5px',
                        fontFamily: 'DM Sans',
                        width: '296px',
                    },
                },
                {
                    props: { variant: 'M2' },
                    style: {
                        height: '45px',
                        fontFamily: 'DM Sans',
                        color: '#8094AE',


                    },
                },
                {
                    props: { variant: 'M3' },
                    style: {
                        fontFamily: 'DM Sans',
                        color: '#8094AE',

                        fontSize: '16px',
                        fontWeight: 'medium',
                    },
                },
            ],
        },

    },
});

export default theme;
