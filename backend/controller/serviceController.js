const Service = require('../model/serviceModel');


// Create a new service
const createService = async (req, res) => {
  try {
    const newService = await Service.create(req.body);
    res.json(newService);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error('Error getting all services:', error);
    res.status(500).json({ message: 'Internal Server Error',success:false , error:error.message  });
  }
};

const getServiceById = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Service not found',success:false , error:error.message  });
    }
    res.json(service);
  } catch (error) {
    console.error('Error getting service by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' ,success:false , error:error.message });
  }
};

const updateService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const { title, description, category } = req.body;
    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { title, description, category },
      { new: true }
    );
    if (!updatedService) {
      return res.status(404).json({ message: 'Service not found',success:false , error:error.message  });
    }
    res.json(updatedService);
  } catch (error) {
    console.error('Error updating service by ID:', error);
    res.status(500).json({ message: 'Internal Server Error',success:false , error:error.message  });
  }
};
const deleteService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const deletedService = await Service.findById(serviceId);

    if (!deletedService) {
      return res.status(404).json({ message: 'Service not found', success: false });
    }

    res.json({ message: 'Service deleted successfully', deletedService, success: true });
  } catch (error) {
    console.error('Error deleting service by ID:', error);
    res.status(500).json({ message: 'Internal Server Error', success: false, error: error.message });
  }
};

const updateAllServices = async (req, res) => {
  try {
    const updatedFields = req.body;
    const services = await Service.find();

    for (const service of services) {
      for (const field in updatedFields) {
        service[field] = updatedFields[field];
      }
      await service.save();
    }

    res.json({ message: 'All services updated successfully',success:true   });
  } catch (error) {
    console.error('Error updating all services:', error);
    res.status(500).json({ message: 'Internal Server Error',success:false , error:error.message  });
  }
};

module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  updateAllServices,
};
 