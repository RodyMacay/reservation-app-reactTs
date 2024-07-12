import { create } from 'zustand';
import { Venta, VentaDetalle } from "../../models";
import { IAddVenta } from '../../interfaces/venta/venta.interface';
import { createVenta } from '../../services';


type State = {
    venta: VentaDetalle | undefined,
}

type Actions = {
    addVenta: (reservacion_idIAddVenta: IAddVenta) => void
}

export const useVentaStore = create<State & Actions>((set, get) => ({
    venta: undefined,
    addVenta: async (reservacion_id: IAddVenta) => {

        const res = await createVenta(reservacion_id)
        if (!res) {
            set({ venta: undefined })
            throw new Error(`No se puede crear la venta`)
        }
        const venta = res.data
        set({venta})
    }
}))