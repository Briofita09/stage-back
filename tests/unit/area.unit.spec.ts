import * as areaService from "../../src/services/area";
import * as areaRepositorie from "../../src/repositories/area";

describe("Testes unitários de área", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Area test suite", () => {
    it("Should create a new Area", async () => {
      const area = {
        name: "AAA",
      };
      jest.spyOn(areaRepositorie, "newArea").mockImplementation((): any => {
        return {
          id: 10,
          name: area.name,
        };
      });
      const newArea = await areaService.newArea(area);

      expect(newArea.name).toBe(area.name);
    });
    it("Should throw an error when a area name already in use", async () => {
      const area = {
        name: "AAA",
      };
      jest
        .spyOn(areaRepositorie, "getAreaByName")
        .mockImplementation((): any => {
          return {
            id: 10,
            name: area.name,
          };
        });
      try {
        await areaService.newArea(area);
      } catch (err) {
        expect(err).toBeInstanceOf(Object);
      }
    });
    it("Should return all areas", async () => {
      const areas = [{ id: 1, name: "AAA" }];
      jest.spyOn(areaRepositorie, "getAllAreas").mockImplementation((): any => {
        return areas;
      });
      const allAreas = await areaService.getAllAreas();
      expect(allAreas).toBeInstanceOf(Array);
    });
    it("Should return area when a exist id is passed", async () => {
      const area = {
        id: 10,
        name: "AAA",
      };
      jest.spyOn(areaRepositorie, "getAreaById").mockImplementation((): any => {
        return {
          id: area.id,
          name: area.name,
        };
      });
      const foundArea = await areaService.getArea("10");
      expect(foundArea).toBeInstanceOf(Object);
      expect(foundArea.name).toBe(area.name);
    });
    it("Should return 404 when a invalid id is passed", async () => {
      jest.spyOn(areaRepositorie, "getAreaById").mockImplementation((): any => {
        return {};
      });
      try {
        await areaService.getArea("99");
      } catch (err) {
        expect(err).toBeInstanceOf(Object);
      }
    });
    it("Should return an updated area", async () => {
      const area = {
        name: "BBB",
      };
      jest.spyOn(areaRepositorie, "updateArea").mockImplementation((): any => {
        return {
          id: 10,
          name: area.name,
        };
      });
      const newArea = await areaService.updateArea(area, "1");
      expect(newArea.name).toBe(area.name);
    });
    it("Should return an error when an areaId invalid is passed", async () => {
      jest
        .spyOn(areaRepositorie, "updateArea")
        .mockImplementation((): any => {});
      try {
        await areaService.updateArea({ name: "" }, "1");
      } catch (err) {
        expect(err).toBeInstanceOf(Object);
      }
    });
    it("Should not delete area when an invalid id is passed", async () => {
      const area = {
        id: 10,
        name: "AAA",
      };
      jest
        .spyOn(areaRepositorie, "deleteArea")
        .mockImplementation((): any => {});
      try {
        await areaService.deleteArea("10");
      } catch (err) {
        expect(err).toBeInstanceOf(Object);
      }
    });
  });
});
