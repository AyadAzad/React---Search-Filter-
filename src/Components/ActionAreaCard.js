import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Data from './Data'
import Paper from '@mui/material/Paper';
import './ActionAreaCard.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function ActionAreaCard() {
  // initializing the useState
     const [filter, setFilter] = useState('')
     
     // taking the updated value from the user 
     const searchText = (event)=>{
        setFilter(event.target.value)
     }
     // return the card 
    let dataSearch = Data.cardData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    })
  return (

      
      <div>
      <div>
        {/* a material UI search bar */}
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            React SearchBar
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Searcg"
              inputProps={{ filter: 'search here' }} //take the inserted value
              onChange={searchText.bind(this)} // find the card of inserted value
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
      </div>
      
      {/* displaying the cards */}
      {dataSearch.map((item,index) =>{
                return  (
                   <div>
                     <Box sx={{flexGrow:1}}  >
                         <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 4, md: 6, lg:8 }}>
                            <Grid item xs={4}  >
                            <Item >
                    <Card sx={{ maxWidth: 345 }} >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.img}
                        alt="images"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                         {item.secondary}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  </Item>
                  </Grid>
                  </Grid>
                  </Box>
                   </div>
                )
      })}
      
     
    </div>
  );
}
export default ActionAreaCard;
