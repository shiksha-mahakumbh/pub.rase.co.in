import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: 'Welcome to Viksit India/Viksit Bharat Journal',
  description: 'Viksit India is a quarterly journal, a transformative evolution of the revered "Echoes of Shiksha Mahakumbh." This journal stands as an integral component of the Shiksha Mahakumbh initiative, a distinguished effort spearheaded by the Department of Holistic Education (DHE). DHE, a visionary endeavor founded by Dr. Thakur SKR, renowned scientist of ISRO, dedicated RSS worker, and accomplished author, envisions education as more than just marks on a page. It represents the complete transformation of young minds into valuable assets for society.In this spirit, Viksit India is dedicated to the advancement of education. We firmly believe that education worth cannot be solely gauged by academic scores. True education involves the holistic development of individuals, infusing them with energy, skills, and values that go beyond textbooks. Our journal is an open invitation to all those who share this vision and are committed to nurturing discussions, research, and insights that pertain to the global educational landscape.Viksit India offers comprehensive coverage of a multitude of educational aspects, from school education to higher education, language pedagogy to technological advancements, child pedagogy to scientific research. It encompasses pioneering research, visionary perspectives, and in-depth explorations of every facet of the ever-evolving domain of learning and teaching. It is a passport to a realm filled with knowledge, inspiration, and innovation within the field of education. The subjects covered in Viksit India are a testament to our commitment to a holistic education approach. We explore school and university education, language education, child pedagogy, research and development, legal education, sports, technology, and basic science. The multidisciplinary approach of our journal ensures that you remain at the forefront of the ever-changing educational landscape.'
 
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <meta http-equiv="refresh" content="1000" />
    <meta charSet="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title> Welcome to Viksit India/Viksit Bharat Journal</title>
    <meta name="keywords" content="Viksit India Journal, Importance of Viksit India Journal, Viksit India Journal articles, Viksit India Journal subscription, Viksit India Journal writers, Viksit India Journal impact, Viksit India Journal review, Viksit India Journal website, Viksit India Journal login, Viksit India Journal editorial team, Viksit India Journal submission, Viksit India Journal guidelines, Viksit India Journal research papers, Viksit India Journal citation format, Viksit India Journal conferences, Viksit India Journal indexing, Viksit India Journal open access, Viksit India Journal impact factor, Viksit India Journal submission guidelines, Viksit India Journal peer review process, Viksit India Journal call for papers, Viksit India Journal plagiarism policy, Viksit India Journal publication fee, Viksit India Journal author guidelines, Viksit India Journal subscription cost, Viksit India Journal research impact, Viksit India Journal citation guidelines, Viksit India Journal review process, Viksit India Journal upcoming events, Viksit India Journal social media handles ,Viksit India, Viksit India journal, RASE2023, RASE 2023, National Conference on Recent Advances in School Education" />
    <meta name="description" content="Unveiling Exemplary Articles " />
   <meta httpEquiv="cache-control" content="no-cache" />
    <meta httpEquiv="Pragma" content="no-cache" />
    <meta httpEquiv="Expires" content="-1" />
    <body className={inter.className}>{children}
    </body>
</html>
  );
}
