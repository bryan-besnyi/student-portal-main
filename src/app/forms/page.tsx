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

interface Form {
  id: string;
  formTitle: string;
  description: string;
  file: {
    url: string;
  };
}

interface Department {
  id: string;
  name: string;
  forms: Form[];
}

export default async function FormsPage() {
  const departmentsWithForms: Department[] =
    (await getAllDepartmentsWithForms()) as Department[];

  departmentsWithForms.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container py-10">
      <h1 className="text-center mt-6 text-3xl">Student Forms Hub</h1>
      <p className="font-extralight italic text-center mx-auto w-3/4 mt-4">
        Navigating college administration can be a complex task, but we&apos;re
        here to make it as smooth as possible.
      </p>
      {departmentsWithForms ? (
        <div className="mt-8">
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
