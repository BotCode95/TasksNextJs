import { useState, ChangeEvent, useContext } from 'react';
import { Button, Box, TextField} from '@mui/material';
import SaveOutLinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleOutline from '@mui/icons-material/AddCircleOutlineOutlined'
import { EntriesContext } from '../../context/entries/';
import { UIContext } from '../../context/ui/UIContext';

export const NewEntry = () => {

    const {addNewEntry} = useContext(EntriesContext)
    const {isAdding, setIsAddingEntry} = useContext(UIContext)
    const [inputValue, setInputValue] = useState("");
    const [touched, setTouched] = useState(false);

    const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if(inputValue.length === 0) return;
        addNewEntry(inputValue)
        setIsAddingEntry(false)
        setTouched(false)
        setInputValue('')
        
    }
    return (
        <Box sx={{marginBotton: 2, paddingX: 1}}>
            {
                isAdding ? (
                    <>
                        <TextField
                            fullWidth
                            sx={{marginTop: 2, marginBottom: 1}}
                            placeholder="Nueva Entrada"
                            autoFocus
                            label='Nueva Entrada'
                            helperText={inputValue.length <=0 && touched && 'Ingrese un valor'}
                            error={inputValue.length <=0 && touched}
                            value={inputValue}
                            onChange={onTextFieldChanges}
                            onBlur={() => setTouched(true)}
                        >
                        </TextField>
                        <Box display="flex" justifyContent="space-between">
                            <Button
                                variant='text' 
                                onClick={() => setIsAddingEntry(false)}
                            >
                                Cancelar
                            </Button>
                            <Button 
                                variant='outlined' 
                                color="secondary"
                                endIcon={<SaveOutLinedIcon/>}
                                onClick={onSave}
                                >
                                Guardar
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Button startIcon={<AddCircleOutline/>}
                    fullWidth
                    variant="outlined"
                    onClick={() => setIsAddingEntry(true)}
                    >
                        Agregar Tarea
                    </Button>
                )
            }
        </Box>
  )
}
