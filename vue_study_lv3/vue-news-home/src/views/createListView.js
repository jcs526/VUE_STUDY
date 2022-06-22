import ListItem from '../components/ListItem';

export default function createListView(name) {
    return {
        name: name,
        render:
            (h) => h(ListItem),
        
    }
}