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
} from "@/components/ui/table";

export default async function FormsPage() {
  const departmentsWithForms = await getAllDepartmentsWithForms();

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
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                      </TableRow>
                    </TableHead>
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
