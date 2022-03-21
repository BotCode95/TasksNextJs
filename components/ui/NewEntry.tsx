import { Button, Box, TextField} from '@mui/material';
import SaveOutLinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleOutline from '@mui/icons-material/AddCircleOutlineOutlined'

export const NewEntry = () => {
  return (
    <Box sx={{marginBotton: 2, paddingX: 1}}>
        <Button startIcon={<AddCircleOutline/>}
            fullWidth
            variant="outlined"

        >
            Agregar Tarea
        </Button>
        <TextField
            fullWidth
            sx={{marginTop: 2, marginBottom: 1}}
            placeholder="Nueva Entrada"
            autoFocus
            label='Nueva Entrada'
            helperText='ingrese un valor'
        >

        </TextField>
        <Box display="flex" justifyContent="space-between">
            <Button 
                variant='outlined' 
                color="secondary"
                endIcon={<SaveOutLinedIcon/>}
                >
                Guardar
            </Button>
            <Button
                variant='text' 
                >
                Cancelar
            </Button>
        </Box>
    </Box>
  )
}
