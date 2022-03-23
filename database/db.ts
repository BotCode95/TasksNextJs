import mongoose from 'mongoose'

/**
 * 0 = disconneted
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
    isConnected: 0
}

export const connect = async () => {
    if(mongoConnection.isConnected) {
        console.log('Conectado')
        return;
    }

    if(mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;
        if(mongoConnection.isConnected === 1) {
            console.log('usando conexion anterior')
            return;
        }

        await mongoose.disconnect();
    }


    await mongoose.connect('...');
    mongoConnection.isConnected = 1;
    console.log('Conected mongo db')
}

export const disconnect = async () => {
    if(mongoConnection.isConnected !== 0) return;

    await mongoose.disconnect();

    console.log('Disconnected MongoDB ')
}