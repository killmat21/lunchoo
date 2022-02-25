import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import person from './Ellipse_163.png'


const UploadPhoto = () => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 275, marginRight: '100px' }}>
            <CardContent>
                <img src={person}/>
            </CardContent>
            <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    borderTopWidth: 1,
                    borderTopStyle: 'solid',
                    borderTopColor: '#E5E5E5'
                }}
            >
                <Button
                    size="small"
                    sx={{color: '#FF9014'}}
                >
                    Upload Picture
                </Button>
            </CardActions>
        </Card>
    )
};

export default UploadPhoto