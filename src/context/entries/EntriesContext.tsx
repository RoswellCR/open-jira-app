import { createContext } from 'react';
import { Entry } from '../../interfaces/entry';

interface ContextProps {
       entries: Entry[];// faltan tipos de datos
}

export const EntriesContext = createContext({} as ContextProps);