<<<<<<< HEAD
import axios from 'axios';
import {AxiosResponse} from 'axios';

class SynchronizeUtils {
    //static host = "http://zhshr-gpc.mynetgear.com:3002";
    static host = "";
    static send(dataName: string, data: any, callback:(response: AxiosResponse) => void) {
        console.log(name);
        console.log(data);
        axios.post(
            this.host + '/synchronize',
            {
                name: dataName,
                content: data,
            }
        );
    }

    static receive(dataName: string, callback:(response: AxiosResponse) => void): any {
        axios.get(
            this.host + '/synchronize?dataName=' + dataName
        ).then(
            callback
        );
    }
}

=======
import axios from 'axios';
import {AxiosResponse} from 'axios';

class SynchronizeUtils {
    //static host = "http://zhshr-gpc.mynetgear.com:3002";
    static host = "";
    static send(dataName: string, data: any, callback:(response: AxiosResponse) => void) {
        console.log(name);
        console.log(data);
        axios.get(
            this.host + '/push'
            + "?dataName=" + dataName
            + "&content=" + JSON.stringify(data)
        );
    }

    static receive(dataName: string, callback:(response: AxiosResponse) => void): any {
        axios.get(
            this.host + '/pull?dataName=' + dataName
        ).then(
            callback
        );
    }
}

>>>>>>> f510df8... 11111
export default SynchronizeUtils;