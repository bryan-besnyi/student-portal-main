import { getAllDepartmentsWithForms } from "@/lib/api";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";

export default async function FormsPage() {
  const departmentsWithForms = await getAllDepartmentsWithForms();

  departmentsWithForms.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container">
      <h1>Forms</h1>
      {departmentsWithForms ? (
        <div>
          {departmentsWithForms.map((department) => (
            <Accordion type="single" collapsible key={department.id}>
              <AccordionItem value={department.name}>
                <AccordionTrigger>
                  <h2>{department.name}</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3">Name</TableHead>
                        <TableHead className="w-2/3">Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {department.forms.map((form) => (
                        <TableRow key={form.id}>
                          <TableCell>
                            <a
                              className="text-indigo-700 underline"
                              href={form.file.url}
                            >
                              {form.formTitle}
                            </a>
                          </TableCell>
                          <TableCell>{form.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      ) : (
        <p>Departments not found or failed to load.</p>
      )}
    </div>
  );
}
