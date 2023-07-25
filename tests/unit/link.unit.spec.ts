import * as linkService from "../../src/services/externalLink";
import * as linkRepositorie from "../../src/repositories/externalLink";
import * as processRepositorie from "../../src/repositories/process";

describe("Testes unitários dos links", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("Link test suite", () => {
    it("Should create a link", async () => {
      const link = {
        processId: 20,
        link: "123",
        title: "123",
      };
      const process = {
        id: 20,
        name: "AAA",
      };
      jest
        .spyOn(processRepositorie, "getProcess")
        .mockImplementation((): any => {
          return process;
        });
      jest
        .spyOn(linkRepositorie, "createExternalLink")
        .mockImplementation((): any => {
          return {
            id: 1,
            link: link.link,
            title: link.title,
            processId: link.processId,
          };
        });
      const newLink = await linkService.createExternalLink("20", link);
      expect(newLink.link).toBe(link.link);
      expect(newLink.title).toBe(link.title);
      expect(newLink.processId).toBe(link.processId);
    });
    it("Shouldd return all Links from a process", async () => {
      const links = [
        {
          id: 1,
          link: "1",
          title: "1",
          processId: "a",
        },
      ];
      const process = {
        id: 1,
        name: "123",
      };
      jest
        .spyOn(processRepositorie, "getProcess")
        .mockImplementation((): any => {
          return process;
        });
      jest
        .spyOn(linkRepositorie, "getAllExternalLinkFromProcess")
        .mockImplementation((): any => {
          return links;
        });
      const AllLinks = await linkService.getAllExternalLinkFromProcess("1");
      expect(AllLinks).toBeInstanceOf(Array);
    });
    it("Should return an updatedLink", async () => {
      const link = {
        id: 10,
        link: "1",
        title: "1",
        processId: "a",
      };
      jest
        .spyOn(linkRepositorie, "getOneExternalLink")
        .mockImplementation((): any => {
          return link;
        });
      jest
        .spyOn(linkRepositorie, "updateExternalLink")
        .mockImplementation((): any => {
          return link;
        });
      const newLink = await linkService.updateExternalLink("10", link);
      expect(newLink.link).toBe(link.link);
      expect(newLink.title).toBe(link.title);
    });
    it("Should not delete an link when an invalid id is passed", async () => {
      jest
        .spyOn(linkRepositorie, "deleteExternalLink")
        .mockImplementation((): any => {});
      try {
        await linkService.deleteExternalLink("1");
      } catch (err) {
        expect(err).toBeInstanceOf(Object);
      }
    });
  });
});
