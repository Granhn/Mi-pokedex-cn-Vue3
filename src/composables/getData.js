import {ref} from 'vue';
export const useGetData = (url) => {

    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const getData = async (url) =>{
        try {
            const result = await fetch(url);
            data.value = await result.json()
        } catch (e) {
            data.value = null;
            error.value = "Error de servidor";
        }finally{
            loading.value = false;
        }
        
        
    }

    return {
        getData,
        data,
        loading,
        error
    }
        
}; 