
import Editorspick from "../components/editorspick/editorspick"
import SectionLatestNews from '../components/sectionLatesNews/SectionLatestNews'
import SectionNews from '../components/sectionNews/SectionNews'

export default function HomePage() {
    return (
        <div>
            
            <SectionNews />
            <SectionLatestNews />
            <Editorspick />
        </div>
    )
}