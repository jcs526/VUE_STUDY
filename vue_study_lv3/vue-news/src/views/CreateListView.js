import ListView from './ListView'
import bus from '@/utils/bus';

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name,
        created() {
            console.log(this.$route.name)
            bus.$emit("start:spinner");
            setTimeout(() => this.$store
                .dispatch("FETCH_LIST",this.$route.name)
                .then(() => bus.$emit("end:spinner"))
                .catch((err) => console.log(err)), 500);
        },
        render(createElement) {
            return createElement(ListView);
        },
    }
}