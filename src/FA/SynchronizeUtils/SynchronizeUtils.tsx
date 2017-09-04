import axios from 'axios';
import { AxiosResponse, AxiosError } from 'axios';

class SynchronizeUtils {
    // static host = "http://zhshr-gpc.mynetgear.com:3002";
    static host = process.env.NODE_ENV === 'production' ? '/api' : '.';
    static heartbeat(
        onAfter: () => void
    ) {
        axios.get(
            this.host + '/heartbeat'
        ).then(
            (response: AxiosResponse) => {onAfter(); }
        ).catch(
            (error: AxiosError) => {onAfter(); }
        );
    }
    static send(
        dataName: string,
        data: {}, 
        callback: (response: AxiosResponse) => void,
        onError: (error: AxiosError) => void
    ) {
        axios.get(
            this.host + '/push'
            + '?dataName=' + dataName
            + '&content=' + JSON.stringify(data)
        ).catch(
            onError
        );
    }

    static receive(
        dataName: string, 
        callback: (response: AxiosResponse) => void,
        onError: (error: AxiosError) => void
    ) {
        axios.get(
            this.host + '/pull?dataName=' + dataName
        ).then(
            callback
        ).catch(
            onError
        );
    }
}

export default SynchronizeUtils;