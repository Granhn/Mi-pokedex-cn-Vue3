import {ref} from 'vue';
export const useGetData = (url) => {

    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const getData = async (url) =>{
        try {
            console.log("Estoy en data")
            const result = await fetch(url);
            data.value  = await result.json()
        } catch (e) {
            data.value = null;
            error.value = "Error de servidor";
        }finally{
            loading.value = false;
        }
        
    }
    fetch(url).then(res => res.json())
    .then(json => data.value = json);
    return {
        getData,
        data,
        loading,
        error
    }
        
}; 